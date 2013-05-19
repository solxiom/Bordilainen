/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.service;

import com.flatmates.board.domain.entity.Comment;
import com.flatmates.board.domain.service.CommentService;
import com.flatmates.board.repository.SimpleCommentRepository;
import java.util.Collection;
import java.util.UUID;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author bakharzy
 */
public class CommentServiceImplTest {
    
    CommentService commentService;
    
    public CommentServiceImplTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        commentService = new CommentServiceImpl(new SimpleCommentRepository());
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of saveComment method, of class CommentServiceImpl.
     */
    @Test
    public void testSaveComment() {
        System.out.println("saveCommentTest");
        Comment expectedComment = createComment();
        assertEquals(0, commentService.listAll().size());
        String id = commentService.saveComment(expectedComment);
        assertEquals(1, commentService.listAll().size());        
    }

    /**
     * Test of removeComment method, of class CommentServiceImpl.
     */
    @Test
    public void testRemoveComment() {
        System.out.println("removeCommentTest");
        Comment expectedComment = createComment();
        assertEquals(0, commentService.listAll().size());
        String id = commentService.saveComment(expectedComment);
        assertEquals(1, commentService.listAll().size());
        commentService.removeComment(expectedComment);
        assertEquals(0, commentService.listAll().size());        
        
    }

    /**
     * Test of listAll method, of class CommentServiceImpl.
     */
    @Test
    public void testListAll() {
        System.out.println("listAllTest");
        Comment expectedComment = createComment();
        Comment expectedComment2 = createComment();
        assertEquals(0, commentService.listAll().size());
        String id = commentService.saveComment(expectedComment);
        String id2 = commentService.saveComment(expectedComment2);
        assertEquals(2, commentService.listAll().size());
        
    }

    /**
     * Test of findByStickerId method, of class CommentServiceImpl.
     */
    @Test
    public void testFindByStickerId() {
        System.out.println("findByStickerIdTest");
        String stickerId = "s305";
        Comment expectedComment = createComment();
        expectedComment.setSticker_id(stickerId);
        String id = commentService.saveComment(expectedComment);
        Collection<Comment> actualCommentList = commentService.findByStickerId(stickerId);
        assertTrue(actualCommentList.contains(expectedComment));
    }

    /**
     * Test of findById method, of class CommentServiceImpl.
     */
    @Test
    public void testFindById() {
        System.out.println("findByIdTest");
        Comment expectedComment = createComment();
        expectedComment.setCommentor_name("test");
        String id = commentService.saveComment(expectedComment);
        Comment actualComment = commentService.findById(id);
        assertEquals(expectedComment.getCommentor_name(),actualComment.getCommentor_name());      
    }

    private String createUniqueId() {
        return UUID.randomUUID().toString();
    }
    
    private Comment createComment() {
        Comment comment = new Comment();
        comment.setSticker_id("id");
        return comment;
    }
}
