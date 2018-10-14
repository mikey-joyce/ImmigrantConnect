class JobPost {
  constructor(id, description, email, employer, phone, ad) {
    this.id = id;
    this.description = description;
    this.email = email;
    this.employer = employer;
    this.phone = phone;
    this.ad = ad;
  }

  static parse(raw_post) {
    let { id, description, email, employer, phone, ad } = raw_post;

    return new JobPost(id, description, email, employer, phone, ad);
  }

  serialize() {
    let { id, description, email, employer, phone, ad } = this;

    return { id, description, email, employer, phone, ad };
  }
}

export default JobPost;
