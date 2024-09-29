package Shellhacks.example.Shellhacks.Model;

import jakarta.persistence.*;

@Entity
@Table(name="topics")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topic_id")
    private int topicID;
    @Column(name = "topic_name")
    private String topicName;

    public Topic(int topicID, String topicName) {
        this.topicID = topicID;
        this.topicName = topicName;
    }

    public Topic() {

    }

    public Topic(String topicName) {
        this.topicName = topicName;
    }

    public int getTopicID() {
        return topicID;
    }

    public void setTopicID(int topicID) {
        this.topicID = topicID;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String toString() {
        return "Topic{" +
                "topicID=" + topicID +
                ", topicName='" + topicName + '\'' +
                '}';
    }
}
