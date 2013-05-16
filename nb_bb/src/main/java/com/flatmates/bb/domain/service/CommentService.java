package com.flatmates.bb.domain.service;

import com.flatmates.bb.domain.entity.Comment;
import java.util.Collection;



public interface CommentService {

		String saveComment(Comment comment);
		
		void removeComment(Comment comment);
		
		Collection<Comment> listAll();
		
		Collection<Comment> findByStickerId(String stickerId);
		
		Comment findById(String commentId);
}
