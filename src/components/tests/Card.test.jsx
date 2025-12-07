import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../Card';

const renderCard = (props) => {
  return render(
    <BrowserRouter>
      <Card {...props} />
    </BrowserRouter>
  );
};

describe('Card component', () => {
  it('affiche le titre correctement', () => {
    renderCard({
      id: 'abc123',
      title: 'Super Appartement',
      cover: '/image.jpg',
    });

    expect(screen.getByText('Super Appartement')).toBeInTheDocument();
  });

  it("affiche l'image de couverture", () => {
    renderCard({
      id: 'abc123',
      title: 'Logement',
      cover: '/photo.png',
    });

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/photo.png');
  });

  it('crée un lien vers la fiche logement', () => {
    renderCard({
      id: 'logement-42',
      title: 'Titre',
      cover: '/img.jpg',
    });

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/logement/logement-42');
  });

  it("n'affiche pas d'image si aucune cover n'est fournie", () => {
    renderCard({
      id: 'id123',
      title: 'Titre sans image',
    });
    
    const img = screen.queryByRole('img');
    expect(img).toBeNull();
  });

});