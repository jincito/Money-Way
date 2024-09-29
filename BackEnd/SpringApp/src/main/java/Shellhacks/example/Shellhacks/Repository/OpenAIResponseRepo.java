package Shellhacks.example.Shellhacks.Repository;

import Shellhacks.example.Shellhacks.Model.OpenAIResponse;
import org.springframework.data.repository.CrudRepository;

public interface OpenAIResponseRepo extends CrudRepository<OpenAIResponse, Integer> {
    OpenAIResponse findByResponseId(String responseId);
}
