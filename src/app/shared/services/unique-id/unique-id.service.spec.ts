import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let uniqueIdService: UniqueIdService;
  beforeEach(() => {
    uniqueIdService = new UniqueIdService();
  });

  it('should create', () => {
    expect(uniqueIdService).toBeTruthy();
  });

  describe(UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name, () => {
    it('should have a generateUniqueIdWithPrefix function', () => {
      const spy = spyOn(uniqueIdService, 'generateUniqueIdWithPrefix');

      uniqueIdService.generateUniqueIdWithPrefix('test');

      expect(spy).toHaveBeenCalledWith('test');
    });

    it('should return a error when prefix is invalid', () => {
      const invalidValues = [undefined, null, '', ' ', '0', '1'];

      invalidValues.forEach((invalidItem) => {
        expect(() => uniqueIdService.generateUniqueIdWithPrefix(invalidItem))
          .withContext(`INVALID VALUE: ${invalidItem}`)
          .toThrow();
      });
    });

    it('should return a unique id when called with prefix', () => {
      const id = uniqueIdService.generateUniqueIdWithPrefix('test-prefix');

      expect(id.startsWith('test-prefix')).toBeTrue();
    });

    it('should not generate duplicate IDs when called multiple times', () => {
      const ids = new Set();

      for (let i = 0; i < 50; i++) {
        ids.add(uniqueIdService.generateUniqueIdWithPrefix('test'));
      }
      expect(ids.size).toBe(50);
    });
  });

  describe(UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name, () => {
    it('should return the number of generated ids when called', () => {
      uniqueIdService.generateUniqueIdWithPrefix('test-id');
      const numberOfGeneratedUniqueIds = uniqueIdService.getNumberOfGeneratedUniqueIds();
      expect(numberOfGeneratedUniqueIds).toBe(1);
    });
  });
});
