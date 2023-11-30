type info = {
  count: number;
};

type character = {
  image: string;
  name: string;
};

type episode = {
  id: number;
  name: string;
  characters: [character];
};

type episodesData = {
  episodes: {
    info: info;
    results: [episode];
  };
};
