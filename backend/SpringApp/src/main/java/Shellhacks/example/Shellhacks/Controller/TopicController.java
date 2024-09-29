package Shellhacks.example.Shellhacks.Controller;

import Shellhacks.example.Shellhacks.Service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import Shellhacks.example.Shellhacks.Model.Topic;

@RestController
@RequestMapping("/topic")
public class TopicController {

    @Autowired
    private TopicService service;

    @PostMapping("/createTopic")
    public ResponseEntity<Topic> createTopic(@RequestBody Topic topicName) {
        return service.createTopic(topicName.getTopicName());
    }

    @PutMapping("/updateTopic")
    public ResponseEntity<Topic> updateTopic(@RequestBody Topic topic) {
        return service.updateTopic(topic.getTopicID(), topic.getTopicName());
    }

    @GetMapping("/getTopic")
    public ResponseEntity<Topic> getTopic(@RequestBody Topic topic) {
        return service.getTopic(topic.getTopicID());
    }
}


