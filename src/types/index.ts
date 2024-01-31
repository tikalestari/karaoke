export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
  };
  
export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
};

export type ISong = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  youtubeUrl: string;
};

export type IPlaylist = {
  id: string;
  name: string;
  creatorId: string;
  songs: ISong[];
};

export type IRoom = {
  id: string;
  code: string;
  hostId: string;
  participants: IUser[];
  songQueue: ISong[];
};
