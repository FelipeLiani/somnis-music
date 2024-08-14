// Importando a classe Media
import Media from "./Media";

export class Playlist {
  // Propriedades da Playlist
  id: string;
  name: string;
  createdAt: Date;
  mediaList: Media[];
  description?: string;
  coverImage?: string;

  constructor(
    name: string,
    mediaList: Media[] = [],
    description?: string,
    coverImage?: string
  ) {
    this.id = this.generateUniqueId();
    this.name = name;
    this.createdAt = new Date();
    this.mediaList = mediaList;
    this.description = description;
    this.coverImage = coverImage;
  }

  // Método para gerar um ID único
  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // Método para adicionar uma música à playlist
  addMedia(media: Media): void {
    this.mediaList.push(media);
  }

  // Método para remover uma música da playlist
  removeMedia(mediaId: string): void {
    this.mediaList = this.mediaList.filter((media) => media.id !== mediaId);
  }

  // Método para reordenar as músicas na playlist
  reorderMedia(newOrder: Media[]): void {
    this.mediaList = newOrder;
  }

  // Método para obter a sequência atual das músicas
  getMediaSequence(): Media[] {
    return this.mediaList;
  }

  // Método para atualizar detalhes da playlist
  updatePlaylistDetails(newName?: string, newDescription?: string, newCoverImage?: string): void {
    if (newName) this.name = newName;
    if (newDescription) this.description = newDescription;
    if (newCoverImage) this.coverImage = newCoverImage;
  }
}
