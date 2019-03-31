import script from './script';
import style from './sass/main.scss';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";


library.add(faCheck);
dom.watch();

script();