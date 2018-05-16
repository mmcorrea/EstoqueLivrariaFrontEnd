import { PainelLivrariaModule } from './painel-livraria.module';

describe('PainelLivrariaModule', () => {
  let painelLivrariaModule: PainelLivrariaModule;

  beforeEach(() => {
    painelLivrariaModule = new PainelLivrariaModule();
  });

  it('should create an instance', () => {
    expect(painelLivrariaModule).toBeTruthy();
  });
});
