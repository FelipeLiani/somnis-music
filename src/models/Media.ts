class Media {
  id: string;
  kind: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  publishedAt: Date;
  link: string;
  thumbnails: [Object];

  constructor(
    id: string,
    kind: string,
    title: string,
    description: string,
    channelId: string,
    channelTitle: string,
    publishedAt: string,
    link: string,
    thumbnails: [Object]
  ) {
    this.id = id;
    this.kind = kind;
    this.title = title;
    this.description = description;
    this.channelId = channelId;
    this.channelTitle = channelTitle;
    this.publishedAt = new Date(publishedAt);
    this.link = link;
    this.thumbnails = thumbnails;
  }
}

export default Media;
