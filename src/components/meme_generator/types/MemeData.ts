export interface MemeData {
  topText?: string;
  bottomText?: string;
  imageUrl: string;
}

export interface ApiMemeProps {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}
