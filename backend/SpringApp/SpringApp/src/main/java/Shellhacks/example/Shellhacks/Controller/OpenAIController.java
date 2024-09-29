package Shellhacks.example.Shellhacks.Controller;

import Shellhacks.example.Shellhacks.Model.OpenAIResponse;
import Shellhacks.example.Shellhacks.Service.OpenAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/openai")
public class OpenAIController {

    @Autowired
    private OpenAIService openAIService;

    @GetMapping("/generate-response")
    public String generateResponseAndSave(@RequestParam String prompt) {
        try {
            openAIService.saveOpenAIResponseToDatabase(prompt);
            return "Response saved to database successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error saving response to database";
        }
    }

    @GetMapping("/response/{responseId}")
    public String getResponseById(@PathVariable String responseId) {
        try {
            // Fetch the response from the database using the responseId
            OpenAIResponse response = openAIService.getResponseById(responseId);
            if (response != null) {
                return response.getResponseText();
            } else {
                return "No response found for the given responseId.";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Error fetching response for the given responseId.";
        }
    }




}

