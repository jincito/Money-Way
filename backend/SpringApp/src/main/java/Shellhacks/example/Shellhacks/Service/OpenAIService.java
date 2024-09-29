//package Shellhacks.example.Shellhacks.Service;
//
////import Shellhacks.example.dto.OpenAIResponseDTO;
////import Shellhacks.example.model.OpenAIResponse;
////import Shellhacks.example.repository.OpenAIResponseRepository;
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.*;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//
//@Service
//public class OpenAIService {
//
//    @Value("${openai.api.key}")
//    private String apiKey;
//
//    private final RestTemplate restTemplate;
//    private final ObjectMapper objectMapper;
//
////    @Autowired
////    private final OpenAIResponseRepository repository; create
//
////    public OpenAIService(RestTemplate restTemplate, ObjectMapper objectMapper, OpenAIResponseRepository repository) {
////        this.restTemplate = restTemplate;
////        this.objectMapper = objectMapper;
////        this.repository = repository;
////    }
//
//    public void saveOpenAIResponseToDatabase(String prompt) {
//        // Define the URL and headers
//        String url = "https://api.openai.com/v1/completions";
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//        headers.setBearerAuth(apiKey);
//
//        // Create the request body
//        String requestBody = String.format(
//                "{\"model\":\"text-davinci-003\", \"prompt\":\"%s\", \"max_tokens\":100}",
//                prompt
//        );
//
//        // Create the request entity
//        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);
//
//        // Send the request
//        ResponseEntity<JsonNode> response = restTemplate.exchange(url, HttpMethod.POST, request, JsonNode.class);
//
//        if (response.getStatusCode() == HttpStatus.OK) {
//            try {
//                JsonNode responseBody = response.getBody();
//
//                // Map the JSON response to OpenAIResponseDTO
//                OpenAIResponseDTO responseDTO = objectMapper.treeToValue(responseBody, OpenAIResponseDTO.class);
//
//                // Convert DTO to entity
//                OpenAIResponse openAIResponse = new OpenAIResponse();
//                openAIResponse.setResponseId(responseDTO.getResponseId());
//                openAIResponse.setResponseText(responseDTO.getResponseText());
//                openAIResponse.setModel(responseDTO.getModel());
//
//                // Save the entity to the database
//                repository.save(openAIResponse);
//
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        } else {
//            System.err.println("Error: " + response.getStatusCode());
//        }
//    }
//}
