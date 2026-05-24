package com.fpt.website_prepme.model.entity;

import com.fpt.website_prepme.enums.VocabularyTopic;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vocabulary_words")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VocabularyWordEntity extends BaseEntity {

    @Column(name = "word", nullable = false, unique = true, length = 100)
    private String word;

    @Column(name = "meaning", nullable = false, columnDefinition = "TEXT")
    private String meaning;

    @Column(name = "pronunciation", length = 100)
    private String pronunciation;

    @Column(name = "example_sentence", columnDefinition = "TEXT")
    private String exampleSentence;

    @Enumerated(EnumType.STRING)
    @Column(name = "topic", nullable = false, length = 50)
    private VocabularyTopic topic;
}
