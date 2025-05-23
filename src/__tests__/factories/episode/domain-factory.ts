import { Episode } from '../../../domain/models/episode';
import { AddEpisode } from '../../../domain/use-cases/episode/add-episode';
import { DeleteEpisode } from '../../../domain/use-cases/episode/delete-episode';
import { LoadEpisodeById } from '../../../domain/use-cases/episode/load-episode-by-id';
import { mockEpisode } from './models-factory';

export const makeAddEpisodeStub = (): AddEpisode => {
  class AddEpisodeStub implements AddEpisode {
    async add(data: AddEpisode.Params): Promise<Episode> {
      return new Promise(resolve => resolve(mockEpisode()));
    }
  }
  return new AddEpisodeStub();
};

export const makeDeleteEpisodeStub = () => {
  class DeleteEpisodeStub implements DeleteEpisode {
    async delete(id: string): Promise<void> {}
  }

  return new DeleteEpisodeStub();
};

export const makeLoadEpisodeByIdStub = () => {
  class LoadEpisodeByIdStub implements LoadEpisodeById {
    async load(id: string): Promise<Episode> {
      return new Promise(resolve => resolve(mockEpisode()));
    }
  }

  return new LoadEpisodeByIdStub();
};
