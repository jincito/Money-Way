package Shellhacks.example.Shellhacks.Service;

import Shellhacks.example.Shellhacks.Service.OpenAIResponseDTO;
import Shellhacks.example.Shellhacks.Repository.OpenAIResponseRepo;
import Shellhacks.example.Shellhacks.Model.OpenAIResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class OpenAIService {

    @Value("${openai.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    private OpenAIResponseRepo repository;

    public OpenAIService(RestTemplate restTemplate, ObjectMapper objectMapper, OpenAIResponseRepo repository) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
        this.repository = repository;
    }

    public void saveOpenAIResponseToDatabase(String prompt) {
        String url = "https://api.openai.com/v1/chat/completions";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        String requestBody = String.format(
                "{\"model\":\"gpt-3.5-turbo\", \"messages\":[{\"role\":\"user\", \"content\":\"%s\"}], \"max_tokens\":1000}",
                prompt
        );

        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);

        ResponseEntity<JsonNode> response = restTemplate.exchange(url, HttpMethod.POST, request, JsonNode.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            try {
                JsonNode responseBody = response.getBody();

                OpenAIResponseDTO responseDTO = new OpenAIResponseDTO();

                responseDTO.setId(responseBody.get("id").asText());
                JsonNode choices = responseBody.get("choices");

                if (choices != null && choices.isArray() && choices.size() > 0) {
                    String responseText = choices.get(0).get("message").get("content").asText();
                    responseDTO.setResponseText(responseText);
                }

                responseDTO.setModel(responseBody.get("model").asText());

                OpenAIResponse openAIResponse = new OpenAIResponse();
                openAIResponse.setResponseId(responseDTO.getId());
                openAIResponse.setResponseText(responseDTO.getResponseText());
                openAIResponse.setModel(responseDTO.getModel());

                repository.save(openAIResponse);

            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            System.err.println("Error: " + response.getStatusCode());
        }
    }

    public OpenAIResponse getResponseById(String responseId) {
        return repository.findByResponseId(responseId);
    }
}