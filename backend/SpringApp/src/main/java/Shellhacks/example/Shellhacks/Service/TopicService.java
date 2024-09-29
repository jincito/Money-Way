package Shellhacks.example.Shellhacks.Service;

import Shellhacks.example.Shellhacks.Model.Topic;
import Shellhacks.example.Shellhacks.Repository.TopicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TopicService {

    @Autowired
    private TopicRepo topicRepo;
    public ResponseEntity<Topic> createTopic(String topicName) {
        Topic topic = new Topic(topicName);
        topicRepo.save(topic);

        return ResponseEntity.status(201).header("Success", "The topic has been created").body(topic);
    }

    public ResponseEntity<Topic> updateTopic(int topicID, String topicName) {
        Topic topic = new Topic(topicID, topicName);
        if(!topicRepo.existsById(topicID))
            return ResponseEntity.status(404).header("Error", "Id not found").body(topic);

        topicRepo.save(topic);

        return ResponseEntity.status(200).header("Success", "The topic has been updated").body(topic);
    }

    public ResponseEntity<Topic> getTopic(int topicID) {
        if (!topicRepo.existsByTopicID(topicID)) {
            return ResponseEntity.status(404).header("Error", "Id not found").build();
        }
        Topic topic = topicRepo.findByTopicID(topicID).orElse(null);
        return ResponseEntity.status(200).header("Success", "The topic has been retrieved").body(topic);
    }
}
