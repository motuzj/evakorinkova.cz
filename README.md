# Webové stránky Evy Kořínkové

[![Netlify Status](https://api.netlify.com/api/v1/badges/955c615b-d18f-4cf2-ab59-bee973df11d5/deploy-status)](https://app.netlify.com/sites/radiant-caramel-060983/deploys)  
<https://evakorinkova.cz>

## Struktura souborů

Hlavní stránka je `/index.html`. Další jednotlivé stránky jsou ve složkách (např. `/weddings/index.html`), kvůli problémům který měl Google.

JavaScript je ve složce `/js/` a CSS ve složce `/css/`.

Všechny obrázky, loga a favicony jsou ve složce `/img/`.  
Fotografie ve složkách podle jména kategorie (např. `/img/lifestyle/` nebo `/img/reportages/`) a náhledy (thumbnails) jsou ve složkách uvnitř kategorií (např. `/img/lifestyle/thumbnails/` nebo `/img/reportages/thumbnails/`).  
Favicony ve složce `/img/favicons/` a loga jsou rovnou ve složce `/img/`.

Font Awesome složka `/fontawesome-free-6.3.0-web/` a Lightbox `/lightbox2-2.11.4/`.

Potom tu je ještě složka `/fonts/` s pár `.otf` fontama.

## Fotky

Všechny fotky jsou maximálně veliké 1920 x 1080 px. A kvůli zmenšení velikosti, a zrychlení načítání jsou kompresovány pomocí nástroje [jpegoptim](https://github.com/tjko/jpegoptim):

```sh
jpegoptim -m85 *.JPG
```

### Náhledy

Náhledy byli vygenerovány pomocí [ImageMagick](https://imagemagick.org/) následovně:

```sh
mogrify -path thumbnails -thumbnail 320x320 *.JPG
```

### html_generator_thumbnails.c

Vygeneruje html kód pro lightbox 2 galerii.

#### Použití

Nejprve upravte 5. (`char name[]`) a 7. řádek(`int maxNum`), případně i další části a potom spusťte:

```sh
gcc html_generator_thumbnails.c && ./a.out
```

## Kontakt

Všechny soubory k projektu mám soukromě na GitHubu a můžu zaslat.

Juraj Motuz <motuzjuraj@gmail.com>  
[GitHub](https://github.com/motuzj)
