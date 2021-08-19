# Studio SPA Multipage
This SPA use React Router to enable multipage. Simple logic, uses a Bootstrap HTML Theme.

Display static data from JSON file. Navigation object is set from a location property that sets dinamicly the location and url of each link. This allow to set differents navbar links with different url or hash in each page.

Each page has it own data object to make reusable components, internal components logic allow to set different data or data formats realying on its presence (true) or absence (false).

Images has to be imported into components, It's not possible to pass the source in straing format, the image will not be rendered. To deal with it and protect the components to be hardcoded, a simple hack is implemented: the string passed into the component is the name of property where the image is saved, all the images are imported into a variable name and all the variables are hosted in an object.

## Packages
React Router is the only package used. It filter URL to render page component based in their path.

## Project Goals
This project aims to set a basic SPA with the extra of multipage by react-router. A proper use of HTML structures into functional components, subcomponents for iterations and reack hooks to set "state" variables and re-render components when its needed with useEffect.

It's an example about integrate a static theme, extract their components to transform them into reusable react components, following good practices. The styles are pre-built but theme colors where handled by setting css variables.
