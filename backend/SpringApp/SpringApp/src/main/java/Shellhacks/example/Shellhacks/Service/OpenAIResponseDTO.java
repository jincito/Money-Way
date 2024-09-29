package Shellhacks.example.Shellhacks.Service;

import java.util.List;

public class OpenAIResponseDTO {

    private String id;
    private String responseText;
    private String model;

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
