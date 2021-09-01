package com.exam.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Question {
	@Id
	@GeneratedValue
	private Long quesId;
	@Column(length = 5000)
	private String content;
	private String image;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String answer;
	
	@Transient
    private  String givenAnswer;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Quiz quiz;
}
