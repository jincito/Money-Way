package Shellhacks.example.Shellhacks.Repository;

import Shellhacks.example.Shellhacks.Model.Topic;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TopicRepo extends CrudRepository<Topic, Integer> {
    Optional<Topic> findByTopicID(int topicID);

    boolean existsByTopicID(int topicID);


}
