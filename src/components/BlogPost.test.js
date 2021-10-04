import { render } from '@testing-library/react';
import BlogPost from './BlogPost';

describe('Blog Post', () => {
  test('save users gists in stateGists', () => {
    render(<BlogPost/>);
  });
});