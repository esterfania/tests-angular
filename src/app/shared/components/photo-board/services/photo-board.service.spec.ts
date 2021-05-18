import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PhotoBoardService } from './photo-board.service';
import { buildPhotoList } from 'src/app/shared/helpers/Test/Mocks/build-photos.mock';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: buildPhotoList(),
};

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    }).compileComponents();
    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it(`#${PhotoBoardService.prototype.getPhotos.name} should return photos`, (done) => {
    service.getPhotos().subscribe((photos) => {
      expect(photos[0].description).toMatch('picture of test');
      done();
    });
    httpController.expectOne(mockData.api).flush(mockData.data);
  });
});
