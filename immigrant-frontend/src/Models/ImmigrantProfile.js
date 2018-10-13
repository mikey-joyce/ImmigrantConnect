class ImmigrantProfile {

  constructor(id, owner, first_name, last_name, bio, location, years_in_residence, country_of_origin ) {

    this.id = id;
    this.owner = owner
    this.first_name = first_name
    this.last_name = last_name
    this.bio = bio;
    this.location = location
    this.country_of_origin = country_of_origin
    this.years_in_residence = years_in_residence

  }

  static parse(raw_profile) {

    let {id, owner, first_name, last_name, bio, location, years_in_residence, country_of_origin} = raw_profile

    return new ImmigrantProfile(id, owner, first_name, last_name, bio, location, years_in_residence, country_of_origin);

  }

  serialize() {

    let {id, owner, first_name, last_name, bio, location, years_in_residence, country_of_origin} = this;

    return {id, owner, first_name, last_name, bio, location, years_in_residence, country_of_origin};

  }

}

export default ImmigrantProfile;
