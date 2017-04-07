import { ArtistPipe } from './artist.pipe';

describe('ArtistPipe', () => {
  it('create an instance', () => {
    const pipe = new ArtistPipe();
    expect(pipe).toBeTruthy();
  });
});
