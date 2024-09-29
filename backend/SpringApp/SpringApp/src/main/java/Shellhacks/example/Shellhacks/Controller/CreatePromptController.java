package Shellhacks.example.Shellhacks.Controller;

import Shellhacks.example.Shellhacks.Model.UserIdRequest;
import Shellhacks.example.Shellhacks.Service.CreatePromptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/createPrompt")
public class CreatePromptController {

    @Autowired
    private CreatePromptService service;


    @PostMapping("/createPrompt")
    public String createPrompt(@RequestBody UserIdRequest userIdRequest) {
        return service.createPrompt(userIdRequest.getUserID());
    }
}
