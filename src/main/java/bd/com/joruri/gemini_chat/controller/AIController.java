package bd.com.joruri.gemini_chat.controller;

import bd.com.joruri.gemini_chat.service.GeminiAnswerService;
import java.util.Map;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ask")
@AllArgsConstructor
public class AIController {

  private final GeminiAnswerService geminiAnswerService;
  ResponseEntity<String> askQuestions(@RequestBody Map<String,String> payload){
        String question = payload.get("question");
        String answer = geminiAnswerService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }
}
