package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.Comment;
import com.flatmates.board.domain.repository.CommentRepository;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Collection;
import java.util.LinkedList;

import org.junit.Test;


public class CommentRepositoryTest {

	CommentRepository cmRepo = new SimpleCommentRepository();
	
	@Test
	public void testSaveComment() {
		Comment expected = createComment();
		String id = cmRepo.saveComment(expected);
		Comment actual = cmRepo.findById(id);
		assertNotNull(actual.getSticker_id());
		assertEquals(expected.getSticker_id(),actual.getSticker_id());
	}
	@Test
	public void testRemoveComment() {
		Comment expected = createComment();
		String id = cmRepo.saveComment(expected);
		Comment actual = cmRepo.findById(id);
		assertEquals(expected.getSticker_id(), actual.getSticker_id());
		assertEquals(1, cmRepo.listAll().size());
		cmRepo.removeComment(actual);
		assertEquals(0,cmRepo.listAll().size());
	}
	@Test
	public void testListAll() {
		Comment expected = createComment();
		Comment expected2 = createComment();
		String id = cmRepo.saveComment(expected);
		String id2 = cmRepo.saveComment(expected2);
		assertEquals(2,cmRepo.listAll().size());
	}
	@Test
	public void testFindByStickerId() {
		Comment expected = createComment();
		Comment expected2 = createComment();
		String id = cmRepo.saveComment(expected);
		String id2 = cmRepo.saveComment(expected2);
		Collection<Comment> list = new LinkedList<Comment>();
		for(Comment cm : cmRepo.listAll()){
			if(cm.getSticker_id().equalsIgnoreCase("test sticker id")){
				list.add(cm);
			}
		}
		assertEquals(2,list.size());
		
	}
	@Test
	public void testFindById() {
		Comment expected = createComment();
		String id = cmRepo.saveComment(expected);
		Comment actual = cmRepo.findById(id);
		assertEquals(expected.getId(),actual.getId());
	}
	private Comment createComment(){
		Comment comment = new Comment();
		comment.setSticker_id("test sticker id");
		return comment;
	}
}
