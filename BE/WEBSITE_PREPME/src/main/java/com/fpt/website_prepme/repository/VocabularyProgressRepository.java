package com.fpt.website_prepme.repository;

import com.fpt.website_prepme.model.entity.VocabularyProgressEntity;
import com.fpt.website_prepme.enums.VocabularyStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VocabularyProgressRepository extends JpaRepository<VocabularyProgressEntity, Long>, JpaSpecificationExecutor<VocabularyProgressEntity> {
    Optional<VocabularyProgressEntity> findByUserIdAndWordId(Long userId, Long wordId);
    List<VocabularyProgressEntity> findByUserId(Long userId);
    List<VocabularyProgressEntity> findByUserIdAndStatus(Long userId, VocabularyStatus status);
}
