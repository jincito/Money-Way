package Shellhacks.example.Shellhacks.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "openai_responses")
public class OpenAIResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "response_id")
    private String responseId;

    @Column(columnDefinition = "TEXT")
    private String responseText;

    @Column(name = "model")
    private String model;


    public OpenAIResponse(int id, String responseId, String responseText, String model) {
        this.id = id;
        this.responseId = responseId;
        this.responseText = responseText;
        this.model = model;
    }

    public OpenAIResponse(String responseId, String responseText, String model) {
        this.responseId = responseId;
        this.responseText = responseText;
        this.model = model;
    }

    public OpenAIResponse() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getResponseId() {
        return responseId;
    }

    public void setResponseId(String responseId) {
        this.responseId = responseId;
    }

    public String getResponseText() {
        return responseText;
    }

    public void setResponseText(String responseText) {
        this.responseText = responseText;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
