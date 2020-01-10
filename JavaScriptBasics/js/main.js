'use strict';
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    static showInfo() {
      console.log('Post class version 1.0.0');
    }
  }

  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }


  const posts = [
    new Post('studying JavaScript'),
    new Post('programming is so funny!'),
    new SponsoredPost('master 3 mitutes', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();

}
