package dev.todorovski.Movies.app.Aucta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;
//    @PostMapping
//    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
//        return new ResponseEntity<>(reviewService.createReview(payload.get("reviewBody"),payload.get("id")), HttpStatus.CREATED);
//    }
    @GetMapping
    public  ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<>(reviewService.allReviews(), HttpStatus.OK);
    }
}
