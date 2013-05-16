package com.flatmates.bb.repositoy;

import com.flatmates.bb.domain.entity.Comment;
import com.flatmates.bb.domain.entity.Sticker;
import com.flatmates.bb.domain.repository.CommentRepository;
import java.util.Collection;
import java.util.LinkedList;
import java.util.UUID;
import org.springframework.stereotype.Repository;


@Repository
public class SimpleCommentRepository implements CommentRepository{

	
	Collection<Sticker> stickerManager = new LinkedList<Sticker>();
	Collection<Comment> commentManager = new LinkedList<Comment>();
	
	@Override
	public String saveComment(Comment comment) {
		comment.setId(UUID.randomUUID().toString());
		commentManager.add(comment);
		return comment.getId();
	}

	@Override
	public void removeComment(Comment comment) {
		commentManager.remove(comment);
	}

	@Override
	public Collection<Comment> listAll() {
		return commentManager;
	}

	@Override
	public Collection<Comment> findByStickerId(String stickerId) {
		Collection<Comment> wantedList = new LinkedList<Comment>();
		for(Comment cm : commentManager){
			if(cm.getSticker_id().equalsIgnoreCase(stickerId)){
				wantedList.add(cm);
			}
		}
		return wantedList;
	}

	@Override
	public Comment findById(String commentId) {
		for(Comment cm : commentManager){
			if(cm.getId().equalsIgnoreCase(commentId)){
				return cm;
			}
		}
		return null;
	}

}
