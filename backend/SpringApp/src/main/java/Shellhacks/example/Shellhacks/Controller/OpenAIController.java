//package Shellhacks.example.Shellhacks.Controller;
//
//import Shellhacks.example.Shellhacks.Service.OpenAIService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class OpenAIController {
//
//    @Autowired
//    private OpenAIService openAIService;
//
//    @GetMapping("/generate-response")
//    public String generateResponseAndSave(@RequestParam String prompt) {
//        try {
//            openAIService.saveOpenAIResponseToDatabase(prompt);
//            return "Response saved to database successfully";
//        } catch (Exception e) {
//            e.printStackTrace();
//            return "Error saving response to database";
//        }
//    }
//}
//
