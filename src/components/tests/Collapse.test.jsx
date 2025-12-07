import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from '../Collapse';

describe('Collapse component', () => {

    it('affiche le titre', () => {
        render(<Collapse title="Description">Contenu</Collapse>);
        expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('rend le contenu dans le DOM par défaut (même s’il est masqué visuellement)', () => {
        render(<Collapse title="Test">Contenu caché</Collapse>);

        expect(screen.getByText('Contenu caché')).toBeInTheDocument();
    });

    it("affiche le contenu après clic sur l'en-tête", () => {
        render(<Collapse title="Infos">Texte visible après clic</Collapse>);

        const header = screen.getByText('Infos');
        fireEvent.click(header);

        expect(screen.getByText('Texte visible après clic')).toBeInTheDocument();
    });

    it('conserve son contenu dans le DOM même après ouverture/fermeture', () => {
        render(<Collapse title="Toggle">Contenu toggle</Collapse>);

        const header = screen.getByText('Toggle');


        fireEvent.click(header);
        expect(screen.getByText('Contenu toggle')).toBeInTheDocument();

        fireEvent.click(header);
        expect(screen.getByText('Contenu toggle')).toBeInTheDocument();
    });
});
