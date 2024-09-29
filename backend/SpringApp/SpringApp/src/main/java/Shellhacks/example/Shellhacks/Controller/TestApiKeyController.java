package Shellhacks.example.Shellhacks.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/test-api-key")
public class TestApiKeyController {

    @Value("${openai.api.key}")
    private String apiKey;

    @GetMapping("/test-api-key")
    public String testApiKey() {
        return "API Key: " + apiKey;
    }
}
