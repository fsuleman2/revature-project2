package com.exam.serviceimpl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import com.exam.model.Quiz;
import com.exam.repository.QuizRepository;
import com.exam.service.QuizService;

public class QuizServiceImpl implements QuizService{

	@Autowired
	private QuizRepository quizRepository;
	@Override
	public Quiz addQuiz(Quiz quiz) {
	
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
	
		return this.quizRepository.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		
		return new HashSet<>(this.quizRepository.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		
		return this.quizRepository.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(Long quizId) {
		Quiz quiz = new Quiz();
		quiz.setQId(quizId);
		this.quizRepository.delete(quiz);
		
	}

}
