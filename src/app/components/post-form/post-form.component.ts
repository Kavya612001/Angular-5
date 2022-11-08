import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';

import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost!: Post;
  @Input() isEdit!: Boolean;

  constructor(private PostService: PostsService) { }

  ngOnInit(): void {
  }

  addPost(title: string, body: string) {
    if(!title || !body) {
      alert("please add post");
    }
    else {
      this.PostService.savePost({title, body} as Post).
            subscribe(post => {
              this.newPost.emit(post);
            });
    }
  }

  updatePost() {
    this.PostService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    })
  }

}
