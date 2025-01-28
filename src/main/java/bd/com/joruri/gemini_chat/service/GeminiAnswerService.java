package bd.com.joruri.gemini_chat.service;

import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GeminiAnswerService {

  @Value("${gemini.api.url}")
  private String geminiApiUrl;
  @Value("${gemini.api.key}")
  private String geminiApiKey;

  private final WebClient webClient;

  public GeminiAnswerService(WebClient.Builder webClient) {
    this.webClient = webClient.build();
  }

  public String getAnswer(String question) {
    Map<String ,Object> requestBody = Map.of("contents",new Object[]{
        Map.of("parts",new Object[]{
            Map.of("text",question)
        })
    });


//    {
//      "contents": [
  //        {
  //          "parts":[
    //            {"text": "Do You Know About Profile in spring"}
    //          ]
  //        }
//        ]
//    }

    String response = webClient.post().uri(
        geminiApiUrl + geminiApiKey
    ).header(
        "Content-Type","application/json"
    ).bodyValue(requestBody).retrieve().bodyToMono(String.class).block();


    return response;
  }
}
