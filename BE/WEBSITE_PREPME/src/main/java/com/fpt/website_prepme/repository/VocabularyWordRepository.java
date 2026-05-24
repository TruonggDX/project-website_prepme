package com.fpt.website_prepme.repository;

import com.fpt.website_prepme.model.entity.VocabularyWordEntity;
import com.fpt.website_prepme.enums.VocabularyTopic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VocabularyWordRepository extends JpaRepository<VocabularyWordEntity, Long>, JpaSpecificationExecutor<VocabularyWordEntity> {
    Optional<VocabularyWordEntity> findByWord(String word);
    List<VocabularyWordEntity> findByTopic(VocabularyTopic topic);
}
