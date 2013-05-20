package com.flatmates.board.domain.service;

import com.flatmates.board.domain.entity.Comment;
import java.util.Collection;

/**
 *
 * @author kavan soleimanbeigi
 */

public interface CommentService {

		String saveComment(Comment comment);
		
		void removeComment(Comment comment);
		
		Collection<Comment> listAll();
		
		Collection<Comment> findByStickerId(String stickerId);
		
		Comment findById(String commentId);
}
