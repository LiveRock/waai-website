import type { LocaleContent } from './types';

const fr: LocaleContent = {
  features: {
    'auto-responder': {
      title: 'Répondeur Automatique WhatsApp',
      shortTitle: 'Répondeur Auto',
      headline: 'Ne laissez plus jamais un client attendre',
      description:
        'Des réponses instantanées basées sur l’IA à chaque message WhatsApp. La correspondance basée sur des règles traite les questions courantes en millisecondes, avec un repli intelligent sur LLM pour tout le reste.',
      metaDescription: 'Répondez automatiquement à chaque message WhatsApp avec la précision de l’IA. Correspondance basée sur des règles plus repli intelligent sur LLM.',
      benefits: [
        { title: 'Réponses en moins d’une seconde', description: 'La correspondance floue trouve la bonne réponse avant que votre client n’ait fini de taper son prochain message.' },
        { title: 'Repli intelligent', description: 'Quand aucune règle ne correspond, votre IA intervient avec une réponse contextuelle et utile — pas un générique « je ne comprends pas ».' },
        { title: 'Disponible 24/7', description: 'Votre agent IA ne dort jamais, ne prend jamais de congé et n’est jamais de mauvaise humeur.' },
      ],
      howItWorks: [
        { title: 'Configurez vos Q&A', description: 'Ajoutez les questions et réponses courantes — importez depuis un CSV ou saisissez-les vous-même.' },
        { title: 'Configurez votre IA', description: 'Choisissez votre fournisseur d’IA et personnalisez le prompt système pour qu’il corresponde au ton de votre marque.' },
        { title: 'Mise en service', description: 'Chaque message WhatsApp entrant reçoit automatiquement une réponse instantanée et précise.' },
      ],
      useCases: [
        { title: 'Automatisation des FAQ', description: 'Gérez les « Quelles sont vos horaires ? » et « Où êtes-vous situés ? » sans lever le petit doigt.' },
        { title: 'Demandes produit', description: 'Répondez automatiquement aux questions sur les prix, la disponibilité et les caractéristiques instantanément.' },
        { title: 'Support hors horaires', description: 'Continuez à servir vos clients quand votre équipe est hors ligne.' },
      ],
    },
    'knowledge-base': {
      title: 'Base de Connaissances',
      shortTitle: 'Base de Connaissances',
      headline: 'Votre expertise métier, toujours disponible',
      description:
        'Construisez une base de connaissances Q&A complète dont votre agent IA s’inspire. Importez des centaines d’entrées via CSV, organisez-les par priorité et laissez la correspondance floue trouver la réponse parfaite à chaque fois.',
      metaDescription: 'Construisez une base de connaissances Q&A intelligente avec import CSV, correspondance floue et contrôle des priorités. Votre expertise, toujours disponible.',
      benefits: [
        { title: 'Import en masse', description: 'Téléchargez des centaines de paires Q&A via CSV ou JSON. Votre base de connaissances se constitue en minutes, pas en semaines.' },
        { title: 'Correspondance intelligente', description: 'La correspondance floue gère les fautes de frappe, les variantes et les correspondances partielles — vos clients n’ont pas besoin d’un libellé exact.' },
        { title: 'Système de priorité', description: 'Contrôlez quelles réponses sont prioritaires lorsque plusieurs correspondances sont trouvées.' },
      ],
      howItWorks: [
        { title: 'Ajoutez vos connaissances', description: 'Saisissez des paires Q&A individuellement ou importez-les en masse depuis un tableur.' },
        { title: 'Organisez et priorisez', description: 'Définissez des catégories, des priorités et des phrases déclencheuses pour chaque entrée.' },
        { title: 'Testez et déployez', description: 'Utilisez le chat de test intégré pour vérifier les réponses, puis passez en production en toute confiance.' },
      ],
      useCases: [
        { title: 'Catalogue produit', description: 'Laissez les clients poser des questions sur n’importe quel produit et obtenez des détails précis instantanément.' },
        { title: 'FAQ sur les politiques', description: 'Livraison, retours, garanties — répondez aux questions de politique sans intervention humaine.' },
        { title: 'Guide d’onboarding', description: 'Les nouveaux clients obtiennent des réponses instantanées aux questions de configuration et de démarrage.' },
      ],
    },
    'logic-flows': {
      title: 'Flux Logiques',
      shortTitle: 'Flux Logiques',
      headline: 'Créez des conversations qui convertissent',
      description:
        'Créez des flux de conversation multi-étapes avec une logique d’embranchements, des conditions et des actions. Guidez les clients à travers la réservation, la qualification, la commande — le tout sans écrire une seule ligne de code.',
      metaDescription: 'Créez des conversations WhatsApp multi-étapes avec logique d’embranchements, conditions et variables. Aucun code requis.',
      benefits: [
        { title: 'Constructeur de flux visuel', description: 'Concevez des conversations complexes avec un éditeur intuitif étape par étape. Aucun codage requis.' },
        { title: 'Embranchements intelligents', description: 'Acheminez les clients différemment selon leurs réponses, l’heure ou n’importe quelle variable.' },
        { title: 'Système de variables', description: 'Capturez et réutilisez des informations tout au long de la conversation — noms, choix, calculs.' },
      ],
      howItWorks: [
        { title: 'Concevez votre flux', description: 'Ajoutez des étapes de message, de question et de condition pour construire votre conversation.' },
        { title: 'Définissez les déclencheurs', description: 'Spécifiez les mots-clés ou phrases qui lancent le flux automatiquement.' },
        { title: 'Testez et activez', description: 'Parcourez le flux en mode test, puis déployez-le pour gérer de vraies conversations.' },
      ],
      useCases: [
        { title: 'Qualification de prospects', description: 'Posez des questions de qualification et acheminez automatiquement les prospects chauds vers votre équipe commerciale.' },
        { title: 'Prise de rendez-vous', description: 'Guidez les clients à travers les créneaux disponibles et confirmez les réservations via Google Calendar.' },
        { title: 'Traitement des commandes', description: 'Guidez les clients à travers la sélection de produits, la personnalisation et la validation de la commande.' },
      ],
    },
    'ai-chatbot': {
      title: 'Chatbot IA',
      shortTitle: 'Chatbot IA',
      headline: 'Votre marque, propulsée par n’importe quelle IA',
      description:
        'Choisissez parmi OpenAI, Anthropic, z.ai, ou apportez votre propre modèle. Configurez la personnalité, le ton et l’expertise pour qu’ils correspondent parfaitement à votre entreprise. La prise en charge multi-fournisseur signifie que vous n’êtes jamais enfermé.',
      metaDescription: 'Chatbot IA multi-fournisseur pour WhatsApp. Choisissez OpenAI, Anthropic, z.ai ou votre propre modèle. Votre marque, votre IA.',
      benefits: [
        { title: 'Multi-fournisseur', description: 'Basculez entre OpenAI, Anthropic, z.ai, llama.cpp et OpenRouter sans modifier votre configuration.' },
        { title: 'Voix de marque', description: 'Personnalisez les prompts système pour que l’IA s’exprime dans le ton et le style de votre marque.' },
        { title: 'Sensible au contexte', description: 'L’IA comprend l’historique des conversations et utilise votre base de connaissances pour des réponses précises.' },
      ],
      howItWorks: [
        { title: 'Choisissez votre fournisseur', description: 'Sélectionnez OpenAI, Anthropic, z.ai ou n’importe quel endpoint compatible OpenAI.' },
        { title: 'Personnalisez le prompt', description: 'Rédigez un prompt système qui capture la voix et l’expertise de votre marque.' },
        { title: 'Définissez le modèle', description: 'Choisissez le modèle adapté à vos besoins et à votre budget — du rapide et économique au puissant et nuancé.' },
      ],
      useCases: [
        { title: 'Support client', description: 'Gérez les demandes de support complexes avec une IA qui comprend vos produits et vos politiques.' },
        { title: 'Assistant commercial', description: 'Recommandez des produits, répondez aux questions techniques et guidez les décisions d’achat.' },
        { title: 'Bot de consultation', description: 'Fournissez des consultations et des évaluations initiales basées sur votre expertise.' },
      ],
    },
    booking: {
      title: 'Système de Réservation WhatsApp',
      shortTitle: 'Réservations',
      headline: 'Des réservations qui se remplissent toutes seules',
      description:
        'Un moteur de réservation complet dans WhatsApp. Vos clients réservent, reportent et annulent dans le chat — selon vos disponibilités réelles — tandis que dépôts, confirmations et rappels partent automatiquement.',
      metaDescription: 'Système de réservation WhatsApp : disponibilités réelles, réservation par IA en un message, dépôts, rappels automatiques et check-in par QR code. Zéro double réservation.',
      benefits: [
        { title: 'Zéro double réservation', description: 'Chaque créneau proposé est réellement libre : le temps disponible est calculé à partir des horaires du personnel, des jours fériés, des réservations existantes et des blocs occupés du Google Calendar de votre équipe — en temps réel.' },
        { title: 'Une réservation en deux messages', description: 'L’IA de réservation intelligente comprend « soin du visage avec Mary mardi vers 16h » — elle associe le service et le coiffeur, trouve le créneau libre le plus proche et réserve dès que votre client dit OUI.' },
        { title: 'Dépôts, rappels et check-in par QR code', description: 'Demandez des dépôts dans le chat, envoyez des rappels automatiques avant chaque rendez-vous et enregistrez les clients par un scan QR — les absences n’ont nulle part où se cacher.' },
      ],
      howItWorks: [
        { title: 'Configurez services et personnel', description: 'Ajoutez des services avec photos, durées et tarifs. Définissez succursales, personnel et horaires de travail — ou travaillez seul avec les horaires par défaut. Importez les jours fériés de votre pays en un clic.' },
        { title: 'Laissez les clients réserver dans le chat', description: 'Importez un flux de réservation prêt à l’emploi ou activez l’IA de réservation intelligente. Les clients ne voient que de vrais créneaux libres et peuvent reporter ou annuler eux-mêmes à tout moment.' },
        { title: 'Laissez tout tourner en pilote automatique', description: 'Confirmations, rappels et reçus PDF à votre marque partent automatiquement. Les statistiques de réservation montrent le chiffre d’affaires, le taux d’absence et vos heures de pointe.' },
      ],
      useCases: [
        { title: 'Salons et spas', description: 'Les clients choisissent le service, le coiffeur et l’heure en un seul chat — les dépôts sécurisent vos créneaux de pointe.' },
        { title: 'Cliniques et cabinets', description: 'Les patients réservent eux-mêmes et reçoivent des rappels ; votre réception voit le calendrier se remplir au lieu de répondre au téléphone.' },
        { title: 'Entreprises multi-sites', description: 'Horaires par succursale, calendriers par employé et import de jours fériés empêchent vos différents sites de jamais créer une double réservation.' },
      ],
    },
    catalog: {
      title: 'Catalogue Produit & Commandes',
      shortTitle: 'Catalogue',
      headline: 'Votre boutique, dans le chat',
      description:
        'Présentez vos produits avec photos et prix directement dans WhatsApp. Les clients parcourent, choisissent des variantes et passent commande — tandis que les stocks en temps réel garantissent que vous ne vendez jamais ce que vous n’avez pas.',
      metaDescription: 'Vendez dans WhatsApp avec un catalogue produit : photos, variantes, stock en temps réel qui empêche toute survente, alertes de stock faible et suivi des commandes de Nouvelle à Livrée.',
      benefits: [
        { title: 'Parcourez et commandez dans le chat', description: 'Les produits s’affichent avec photos, descriptions et prix. Les clients choisissent une variante de taille ou de couleur et passent commande sans jamais quitter WhatsApp.' },
        { title: 'Un stock à l’épreuve de la survente', description: 'Dès qu’une commande est passée, le stock est réservé pour ce client. Les alertes de stock faible vous parviennent par e-mail et notification push avant la rupture.' },
        { title: 'Suivi des commandes intégré', description: 'Suivez d’un coup d’œil les commandes de Nouvelle à Confirmée à Livrée. Les annulations remettent le stock en réserve d’elles-mêmes, et chaque mouvement de stock est consigné dans un registre consultable.' },
      ],
      howItWorks: [
        { title: 'Ajoutez vos produits', description: 'Photos, prix, catégories et variantes avec leurs propres niveaux de stock. Les noms de produits se traduisent automatiquement dans la langue de votre client.' },
        { title: 'Ajoutez le flux de commande', description: 'Importez le modèle de commande de produit prêt à l’emploi — parcourir, choisir une variante, commander — ou construisez le vôtre avec les étapes de flux catalogue.' },
        { title: 'Confirmez et livrez', description: 'Les commandes arrivent avec le stock déjà réservé. Confirmez et livrez en un clic ; votre client peut consulter « Mes commandes » dans le chat à tout moment.' },
      ],
      useCases: [
        { title: 'Précommandes en restauration', description: 'Les habitués commandent le déjeuner de demain depuis le chat qu’ils utilisent déjà — avec le stock en direct sur les plats du jour.' },
        { title: 'Retail avec variantes', description: 'Tailles, couleurs et SKU ont chacune leur propre stock : « en avez-vous en grand ? » reçoit une réponse exacte.' },
        { title: 'Une urgence réelle', description: '« Plus que 3 en stock » provient des comptes de stock réels — les clients passent à l’action, et vous ne ferez plus jamais de survente.' },
      ],
    },
    crm: {
      title: 'CRM & Attribution Publicitaire',
      shortTitle: 'CRM',
      headline: 'Sachez quelles conversations deviennent des revenus',
      description:
        'Chaque personne qui vous écrit devient un contact — tagué, classé en liste et relié à ses réservations et commandes. Connectez vos publicités Facebook pour voir quelles campagnes apportent des prospects et des revenus WhatsApp, et automatisez le suivi. Les contacts sont inclus dans chaque forfait, essai gratuit compris.',
      metaDescription: 'CRM WhatsApp : contacts capturés automatiquement de chaque conversation, attribution des publicités Facebook avec ROAS et coût par prospect, et automatisations façon Zapier.',
      benefits: [
        { title: 'Un CRM qui se remplit tout seul', description: 'Chaque conversation entrante crée automatiquement un contact avec son historique de conversation, ses réservations et ses commandes rattachés. Tags, listes et champs personnalisés gardent tout organisé.' },
        { title: 'Attribution publicitaire et ROAS', description: 'Les clics sur les publicités click-to-WhatsApp sont capturés dès le premier message de chaque contact. Comparez dépenses publicitaires et revenus WhatsApp attribués, ROAS et coût par prospect — par campagne.' },
        { title: 'Des automatisations qui font le suivi', description: 'Des règles façon Zapier : quand une réservation est confirmée ou une commande passée, waai peut notifier votre équipe, taguer le contact, signaler la conversion à Facebook ou appeler un webhook.' },
      ],
      howItWorks: [
        { title: 'Les conversations deviennent des contacts', description: 'Chaque nouveau numéro est capturé automatiquement, avec l’historique complet des conversations, réservations et commandes sur un seul profil.' },
        { title: 'Connectez vos publicités', description: 'Une connexion Meta unique remonte les prospects et les achats à Facebook, pour que vos campagnes s’optimisent sur les revenus WhatsApp réels.' },
        { title: 'Automatisez le suivi', description: 'Choisissez un déclencheur et des actions — waai notifie votre équipe, met à jour tags et listes et publie vers vos webhooks automatiquement.' },
      ],
      useCases: [
        { title: 'Publicités click-to-WhatsApp', description: 'Voyez quelles campagnes lancent des conversations et quelles conversations convertissent — puis placez le budget là où se trouve le ROAS.' },
        { title: 'Alertes pour l’équipe', description: 'Une réservation confirmée ou une grosse commande passée ? La bonne personne reçoit un e-mail et une notification mobile instantanément.' },
        { title: 'Diffusions plus intelligentes', description: 'Taguez et regroupez les contacts selon leur comportement, puis ciblez vos campagnes WhatsApp avec précision.' },
      ],
    },
    'team-inbox': {
      title: 'Boîte de Réception d’Équipe',
      shortTitle: 'Boîte de Réception d’Équipe',
      headline: 'L’IA gère le quotidien. Vous gérez le reste.',
      description:
        'Suivez toutes les conversations WhatsApp en temps réel. Intervenez avec une réponse humaine quand l’IA ne suffit pas. Transférez fluidement entre l’IA et les agents humains sans que le client ne s’en aperçoive.',
      metaDescription: 'Suivez les conversations WhatsApp en temps réel. Intervenez avec une réponse humaine quand l’IA ne suffit pas. Transfert fluide.',
      benefits: [
        { title: 'Suivi en direct', description: 'Observez les conversations se dérouler en temps réel avec des listes de messages à actualisation automatique.' },
        { title: 'Transfert à un humain', description: 'Reprenez n’importe quelle conversation avec une réponse manuelle. L’IA s’efface jusqu’à ce que vous ayez fini.' },
        { title: 'Historique complet', description: 'Chaque message est enregistré — recherchez, filtrez et consultez n’importe quelle conversation à tout moment.' },
      ],
      howItWorks: [
        { title: 'L’IA s’en charge', description: 'Les messages entrants reçoivent une réponse IA instantanée basée sur votre base de connaissances et vos flux.' },
        { title: 'Vous suivez', description: 'Observez toutes les conversations depuis votre tableau de bord. Mises à jour en temps réel, aucune actualisation nécessaire.' },
        { title: 'Intervenez quand besoin', description: 'Saisissez une réponse manuelle pour reprendre la main. L’IA se met en pause et reprend quand vous avez fini.' },
      ],
      useCases: [
        { title: 'Gestion des escalades', description: 'Les problèmes complexes sont transférés à des humains tandis que l’IA gère les plus simples.' },
        { title: 'Traitement VIP', description: 'Intervenez dans les conversations à forte valeur pour une touche personnelle.' },
        { title: 'Assurance qualité', description: 'Examinez les conversations de l’IA et corrigez les réponses pour améliorer la précision au fil du temps.' },
      ],
    },
    campaigns: {
      title: 'Campagnes WhatsApp',
      shortTitle: 'Campagnes',
      headline: 'Touchez vos clients là où ils lisent vraiment',
      description:
        'Les messages WhatsApp ont un taux d’ouverture de 98 %. Envoyez des campagnes, des promotions et des mises à jour ciblées directement sur le téléphone de vos clients. Une messagerie basée sur des modèles conforme aux politiques de WhatsApp.',
      metaDescription: 'Envoyez des campagnes WhatsApp avec 98 % de taux d’ouverture. Messagerie basée sur des modèles, diffusion ciblée et conformité aux politiques.',
      benefits: [
        { title: 'Taux d’ouverture de 98 %', description: 'Les messages WhatsApp sont ouverts. L’e-mail ne peut pas rivaliser avec un tel niveau d’attention.' },
        { title: 'Basé sur des modèles', description: 'Des modèles de messages pré-approuvés garantissent la conformité de vos campagnes aux politiques de WhatsApp.' },
        { title: 'Diffusion ciblée', description: 'Segmentez votre audience et envoyez le bon message aux bonnes personnes.' },
      ],
      howItWorks: [
        { title: 'Créez un modèle', description: 'Concevez votre modèle de message avec des variables dynamiques pour la personnalisation.' },
        { title: 'Obtenez l’approbation', description: 'Soumettez votre modèle à WhatsApp pour approbation — généralement sous 24 heures.' },
        { title: 'Envoyez votre campagne', description: 'Diffusez votre message aux contacts sélectionnés en un clic.' },
      ],
      useCases: [
        { title: 'Ventes flash', description: 'Envoyez des promotions sensibles au temps que les clients voient et sur lesquelles ils agissent vraiment.' },
        { title: 'Rappels de rendez-vous', description: 'Réduisez les absences avec des rappels de rendez-vous automatiques via WhatsApp.' },
        { title: 'Lancements de produit', description: 'Annoncez de nouveaux produits ou services directement à votre clientèle.' },
      ],
    },
    analytics: {
      title: 'Tableau de Bord Analyses',
      shortTitle: 'Analyses',
      headline: 'Sachez ce qui fonctionne. Corrigez ce qui dysfonctionne.',
      description:
        'Suivez les volumes de messages, les sources de réponses, la popularité des déclencheurs et les schémas de conversation. Voyez exactement comment votre agent IA performe et où l’améliorer.',
      metaDescription: 'Suivez les volumes de messages WhatsApp, les performances de l’IA, les sujets populaires et les schémas de conversation. Optimisation basée sur les données.',
      benefits: [
        { title: 'Aperçu des messages', description: 'Suivez les volumes entrants/sortants, les temps de réponse et les tendances de conversation au fil du temps.' },
        { title: 'Répartition des sources', description: 'Voyez comment les réponses se répartissent entre les règles, l’IA, les flux et les agents humains.' },
        { title: 'Sujets populaires', description: 'Découvrez vos questions les plus posées et vos flux les plus utilisés pour optimiser votre configuration.' },
      ],
      howItWorks: [
        { title: 'Les messages affluent', description: 'Chaque interaction WhatsApp est automatiquement suivie et catégorisée.' },
        { title: 'Le tableau de bord se met à jour', description: 'Les graphiques et indicateurs s’actualisent quotidiennement avec les dernières données.' },
        { title: 'Agissez sur les aperçus', description: 'Utilisez les données pour ajouter les Q&A manquants, améliorer les flux et optimiser les prompts de l’IA.' },
      ],
      useCases: [
        { title: 'Suivi des performances', description: 'Surveillez combien de conversations votre IA gère par rapport aux agents humains.' },
        { title: 'Analyse des lacunes', description: 'Trouvez les questions auxquelles l’IA ne peut pas répondre et ajoutez-les à votre base de connaissances.' },
        { title: 'Mesure du ROI', description: 'Suivez les volumes de messages pour quantifier les économies de temps et d’argent.' },
      ],
    },
    'document-generation': {
      title: 'Génération de Documents',
      shortTitle: 'Génération de Documents',
      headline: 'De la conversation au document en quelques secondes',
      description:
        'Générez des feuilles de calcul Excel, des documents Word, des PDF, des Google Docs et des Google Sheets directement à partir des données de chat. Factures, rapports, devis — créés et envoyés automatiquement.',
      metaDescription: 'Générez Excel, Word, PDF, Google Docs et Sheets à partir de conversations WhatsApp. Factures, devis et rapports en pilote automatique.',
      benefits: [
        { title: 'Formats multiples', description: 'Générez Excel, Word, PDF ou des Google Docs et Sheets natifs — tout ce dont votre flux de travail a besoin.' },
        { title: 'Piloté par les données', description: 'Utilisez les variables et le contexte de la conversation pour remplir les documents avec de vraies données client.' },
        { title: 'Envoi automatique', description: 'Les documents sont générés et envoyés au client via WhatsApp automatiquement.' },
      ],
      howItWorks: [
        { title: 'Définissez le document', description: 'Configurez les colonnes, les sources de données et le format dans l’étape de génération de votre flux.' },
        { title: 'Collectez les données', description: 'Votre flux logique rassemble les informations via la conversation.' },
        { title: 'Générez et envoyez', description: 'Le document est créé et remis au client — aucune étape manuelle.' },
      ],
      useCases: [
        { title: 'Génération de factures', description: 'Collectez les détails de la commande et générez une facture professionnelle automatiquement.' },
        { title: 'Constructeur de devis', description: 'Parcourez les besoins et produisez un document de devis mis en forme.' },
        { title: 'Compilation de rapports', description: 'Rassemblez des données via le chat et compilez-les en un rapport structuré.' },
      ],
    },
    'super-powers': {
      title: 'Super Pouvoirs',
      shortTitle: 'Super Pouvoirs',
      headline: 'Votre agent IA a des super pouvoirs',
      description:
        'Analyse visuelle, recherche web, lecture web et accès à la documentation GitHub — toutes disponibles comme capacités que votre agent IA peut utiliser pendant les conversations.',
      metaDescription: 'Analyse visuelle, recherche web, lecture web et accès aux docs GitHub pour votre agent IA WhatsApp. Des super pouvoirs pour votre entreprise.',
      benefits: [
        { title: 'Analyse visuelle', description: 'Les clients envoient des photos et votre IA les comprend — produits, documents, captures d’écran, n’importe quoi.' },
        { title: 'Recherche web', description: 'Votre IA peut chercher sur le web des informations en temps réel pour répondre aux questions avec précision.' },
        { title: 'Lecteur web', description: 'Extrayez et résumez le contenu de n’importe quelle URL que vos clients partagent.' },
      ],
      howItWorks: [
        { title: 'Activez les super pouvoirs', description: 'Activez Vision, Recherche Web, Lecteur Web ou Zread dans vos paramètres.' },
        { title: 'Construisez des flux', description: 'Ajoutez des étapes de vision pour analyser des images, ou des étapes de recherche web pour obtenir des données en temps réel.' },
        { title: 'Fournissez les réponses', description: 'Votre IA utilise ces capacités pendant les conversations pour donner de meilleures réponses.' },
      ],
      useCases: [
        { title: 'Identification de produit', description: 'Les clients envoient une photo de produit et obtiennent une identification et un prix instantanément.' },
        { title: 'Traitement de documents', description: 'Extrayez le texte de photos de factures, de reçus ou de contrats.' },
        { title: 'Recherche en temps réel', description: 'Cherchez sur le web les prix actuels, la disponibilité ou l’actualité pour répondre aux questions.' },
      ],
    },
  },

  industries: {
    ecommerce: {
      title: 'E-commerce',
      headline: 'Faites de WhatsApp votre premier canal de vente',
      description: 'Automatisez les demandes produit, les mises à jour de commande, les demandes de retour et la récupération des paniers abandonnés. Votre agent IA gère l’ensemble du parcours client sur WhatsApp.',
      metaDescription: 'IA WhatsApp pour le e-commerce. Automatisez les demandes produit, le suivi des commandes, les retours et le support client.',
      painPoints: [
        'Les clients abandonnent leur panier quand ils n’obtiennent pas de réponse rapide',
        'L’équipe support submergée par les demandes « où est ma commande »',
        'Aucun moyen d’atteindre les clients sur leur canal préféré',
      ],
      useCases: [
        { title: 'Assistant catalogue produit', description: 'Les clients décrivent ce dont ils ont besoin et votre IA recommande le bon produit avec prix et disponibilité.' },
        { title: 'Suivi des commandes', description: 'Mises à jour instantanées du statut des commandes quand les clients demandent « où est ma commande ? »' },
        { title: 'Traitement des retours', description: 'Guidez les clients à travers le processus de retour avec des flux automatiques et la génération de documents.' },
      ],
    },
    healthcare: {
      title: 'Santé',
      headline: 'Une meilleure communication patient, moins de travail administratif',
      description: 'Automatisez la planification des rendez-vous, les demandes d’ordonnance et le suivi des patients. Conception sensible à la HIPAA avec une communication sécurisée et chiffrée.',
      metaDescription: 'IA WhatsApp pour la santé. Automatisez la planification des rendez-vous, le suivi des patients et les demandes d’ordonnance.',
      painPoints: [
        'Les lignes téléphoniques saturées par les demandes de rendez-vous',
        'Le personnel passe des heures sur des appels de planification répétitifs',
        'Les patients peinent à vous joindre en dehors des horaires d’ouverture',
      ],
      useCases: [
        { title: 'Planification des rendez-vous', description: 'Les patients prennent, reportent ou annulent des rendez-vous via WhatsApp avec l’intégration Google Calendar.' },
        { title: 'Demandes d’ordonnance', description: 'Réponses automatiques sur les renouvellements d’ordonnance, les instructions de dosage et les horaires de pharmacie.' },
        { title: 'Triage des patients', description: 'Des flux logiques guident les patients à travers des vérifications de symptômes et les orientent vers le bon service.' },
      ],
    },
    education: {
      title: 'Éducation',
      headline: 'Répondez instantanément à chaque question d’étudiant et de parent',
      description: 'Automatisez les demandes d’inscription, les informations sur les cours, la recherche d’emplois du temps et les rappels de paiement des frais. Votre IA gère des milliers d’étudiants sans sourciller.',
      metaDescription: 'IA WhatsApp pour l’éducation. Automatisez les demandes d’inscription, les infos sur les cours et la communication avec les étudiants.',
      painPoints: [
        'Le personnel submergé par des questions d’inscription répétitives',
        'Les parents ne peuvent pas joindre les admissions en pleine saison',
        'Les étudiants ont besoin de réponses en dehors des horaires de bureau',
      ],
      useCases: [
        { title: 'Assistant des admissions', description: 'Répondez automatiquement aux détails des programmes, aux conditions d’entrée et aux demandes de statut de candidature.' },
        { title: 'Informations sur les cours', description: 'Les étudiants obtiennent instantanément des détails sur les emplois du temps, les programmes et les informations sur les formateurs.' },
        { title: 'Rappels de frais', description: 'Rappels de paiement automatiques et informations sur les plans de paiement échelonnés via WhatsApp.' },
      ],
    },
    'real-estate': {
      title: 'Immobilier',
      headline: 'Qualifiez des prospects et planifiez des visites en pilote automatique',
      description: 'Captez les demandes de biens, qualifiez les acheteurs, planifiez des visites et envoyez des documents immobiliers — le tout automatiquement via WhatsApp.',
      metaDescription: 'IA WhatsApp pour l’immobilier. Qualifiez des prospects, planifiez des visites et envoyez des documents immobiliers automatiquement.',
      painPoints: [
        'Des centaines de demandes de biens mais peu de prospects qualifiés',
        'Planifier des visites est un cauchemar d’allers-retours',
        'Impossible de répondre assez vite aux demandes avant qu’elles ne passent à autre chose',
      ],
      useCases: [
        { title: 'Mise en relation de biens', description: 'Les acheteurs décrivent leur bien idéal et votre IA recommande des annonces correspondantes avec photos et détails.' },
        { title: 'Planificateur de visites', description: 'Réservation automatique dans le calendrier pour les visites de biens avec rappels et confirmations.' },
        { title: 'Remise de documents', description: 'Générez et envoyez automatiquement des brochures immobilières, des plans et des grilles tarifaires en PDF.' },
      ],
    },
    hospitality: {
      title: 'Hôtellerie',
      headline: 'Ravissez vos clients avant même qu’ils n’arrivent',
      description: 'Automatisez les confirmations de réservation, les demandes de service d’étage, les recommandations de conciergerie et les retours clients. WhatsApp est la nouvelle réception.',
      metaDescription: 'IA WhatsApp pour l’hôtellerie. Automatisez les réservations, les services de conciergerie et la communication avec les clients.',
      painPoints: [
        'Les clients s’attendent à des réponses instantanées à toute heure',
        'Les demandes au concierge se perdent entre les équipes',
        'La collecte de retours après le séjour est irrégulière',
      ],
      useCases: [
        { title: 'Assistant de réservation', description: 'Les clients vérifient les disponibilités, réservent des chambres et obtiennent une confirmation instantanée via WhatsApp.' },
        { title: 'Service de conciergerie', description: 'Recommandations basées sur l’IA pour les restaurants, les activités et les transports.' },
        { title: 'Retours clients', description: 'Enquêtes post-séjour automatiques et demandes d’avis pour booster votre réputation en ligne.' },
      ],
    },
    restaurants: {
      title: 'Restaurants',
      headline: 'Prenez des commandes et des réservations sans décrocher le téléphone',
      description: 'Commandes via WhatsApp, gestion des réservations, demandes de menu et mises à jour de livraison — tout est géré automatiquement pendant que votre personnel se concentre sur la cuisine.',
      metaDescription: 'IA WhatsApp pour les restaurants. Prenez des commandes, gérez les réservations et tenez les clients informés automatiquement.',
      painPoints: [
        'Le téléphone sonne sans arrêt aux heures de pointe',
        'Le personnel ne peut pas gérer commandes et réservations en même temps',
        'Les clients veulent voir le menu avant de commander',
      ],
      useCases: [
        { title: 'Assistant de menu', description: 'Les clients parcourent le menu, posent des questions sur les ingrédients et obtiennent les informations diététiques instantanément.' },
        { title: 'Réservation de table', description: 'Réservations de table automatiques avec date, heure, taille du groupe et demandes spéciales.' },
        { title: 'Mises à jour de commande', description: 'Mises à jour en temps réel du statut de livraison et de retrait envoyées proactivement via WhatsApp.' },
      ],
    },
    fitness: {
      title: 'Fitness',
      headline: 'Gardez vos membres engagés et réservant des cours à toute heure',
      description: 'Automatisez les réservations de cours, les demandes d’adhésion, la recherche d’emplois du temps et les conseils d’entraînement. Votre coach personnel IA ne prend jamais de jour de repos.',
      metaDescription: 'IA WhatsApp pour les studios de fitness. Automatisez les réservations de cours, les demandes d’adhésion et l’engagement des membres.',
      painPoints: [
        'Les demandes de réservation de cours submergent le personnel d’accueil',
        'Les membres posent les mêmes questions sur les horaires et les tarifs',
        'Les absences grignotent vos revenus sans système de rappel',
      ],
      useCases: [
        { title: 'Réservation de cours', description: 'Les membres consultent le planning, vérifient les disponibilités et réservent des cours directement dans WhatsApp.' },
        { title: 'Informations sur l’adhésion', description: 'Réponses instantanées sur les formules, les tarifs, les équipements et les avantages de l’adhésion.' },
        { title: 'Conseils d’entraînement', description: 'Conseils de fitness basés sur l’IA et suggestions d’exercices selon les objectifs des membres.' },
      ],
    },
    'professional-services': {
      title: 'Services Professionnels',
      headline: 'Moins de temps pour l’administratif, plus de temps pour les clients',
      description: 'Automatisez l’accueil des clients, la planification des rendez-vous, la collecte de documents et les mises à jour d’avancement. Des services professionnels, propulsés par l’efficacité de l’IA.',
      metaDescription: 'IA WhatsApp pour les services professionnels. Automatisez l’accueil des clients, la planification et la communication.',
      painPoints: [
        'L’accueil des clients génère trop d’allers-retours',
        'Les conflits de planning font perdre du temps à tout le monde',
        'Les clients attendent une communication plus rapide que ce que vous pouvez offrir',
      ],
      useCases: [
        { title: 'Accueil des clients', description: 'Des flux automatiques collectent les informations client, les détails du dossier et les documents requis.' },
        { title: 'Gestion des rendez-vous', description: 'Planifiez, reportez et envoyez des rappels pour les réunions clients via Google Calendar.' },
        { title: 'Mises à jour de statut', description: 'Tenez les clients informés avec des mises à jour d’avancement automatiques et des notifications d’étapes.' },
      ],
    },
    automotive: {
      title: 'Automobile',
      headline: 'De l’essai au rappel d’entretien — tout sur WhatsApp',
      description: 'Automatisez les demandes de véhicules, les réservations d’essais, les rendez-vous d’entretien et les rappels de maintenance. Votre showroom ne ferme jamais.',
      metaDescription: 'IA WhatsApp pour l’automobile. Automatisez les demandes de véhicules, les réservations d’essais et les rappels d’entretien.',
      painPoints: [
        'Des centaines de demandes de véhicules mais pas le temps de toutes les traiter',
        'La planification des rendez-vous d’entretien est manuelle et source d’erreurs',
        'Les clients oublient le planning de maintenance et vous perdez des revenus',
      ],
      useCases: [
        { title: 'Bot de demandes de véhicules', description: 'Les clients posent des questions sur les modèles, les caractéristiques, les prix et la disponibilité — tout est répondu instantanément.' },
        { title: 'Réservation d’essai', description: 'Planification automatique d’essais avec intégration de calendrier et rappels.' },
        { title: 'Rappels d’entretien', description: 'Rappels de maintenance proactifs basés sur le kilométrage et les intervalles de temps.' },
      ],
    },
  },

  solutions: {
    marketing: {
      title: 'Pour le Marketing',
      headline: 'Faites de WhatsApp votre meilleur canal marketing',
      description:
        'Captez des prospects, entretenez vos contacts et stimulez les conversions via WhatsApp — là où vos clients sont vraiment attentifs. Automatisez les campagnes, suivez les résultats et développez votre audience.',
      metaDescription: 'Faites de WhatsApp votre canal marketing le plus efficace. Captez des prospects, automatisez les campagnes et boostez les conversions.',
      painPoints: [
        { title: 'Puis-je atteindre des clients vraiment attentifs ?', description: 'Le marketing par e-mail affiche en moyenne 20 % de taux d’ouverture. WhatsApp atteint 98 % — vos messages sont vraiment vus.' },
        { title: 'Puis-je répondre aux prospects avant qu’ils ne passent à autre chose ?', description: 'Chaque minute d’attente réduit la conversion des prospects de 10 %. Votre IA répond instantanément, 24/7.' },
        { title: 'Puis-je personnaliser chaque message sans embaucher plus de monde ?', description: 'Vous envoyez le même message générique à tout le monde ? L’IA rend chaque interaction personnelle.' },
      ],
      features: [
        { title: 'Campagnes WhatsApp', description: 'Envoyez des messages diffusés ciblés avec des campagnes basées sur des modèles.' },
        { title: 'Flux de capture de prospects', description: 'Des flux automatiques qui qualifient et capturent les informations des prospects.' },
        { title: 'Marketing par base de connaissances', description: 'Recommandations produit et réponses promotionnelles dans vos Q&A.' },
        { title: 'Analyses', description: 'Suivez les performances des campagnes, les volumes de messages et les taux de conversion.' },
        { title: 'Attribution Publicitaire & ROAS', description: 'Connectez vos publicités click-to-WhatsApp et voyez exactement quelles campagnes transforment les conversations en revenus.' },
      ],
      stats: [{ label: 'Taux d’ouverture WhatsApp' }, { label: 'Engagement supérieur' }, { label: 'Meilleur taux de clics' }],
    },
    sales: {
      title: 'Pour les Ventes',
      headline: 'Concluez plus vite sur WhatsApp',
      description:
        'Qualifiez automatiquement les prospects, planifiez des rendez-vous, envoyez devis et propositions, et concluez des ventes — le tout via WhatsApp. Votre agent commercial IA travaille sans relâche.',
      metaDescription: 'Concluez plus vite sur WhatsApp. Qualifiez des prospects, prenez des rendez-vous, générez des devis et convertissez à toute heure.',
      painPoints: [
        { title: 'Puis-je capter des prospects en dehors des horaires ?', description: 'Les prospects arrivent hors horaires et refroidissent au matin. L’IA les engage instantanément, à toute heure.' },
        { title: 'Puis-je arrêter de perdre du temps avec des prospects non qualifiés ?', description: 'Des heures gaspillées avec des prospects non qualifiés. Les flux logiques qualifient automatiquement pour que vous vous concentriez sur les prospects chauds.' },
        { title: 'Puis-je envoyer devis et propositions en quelques secondes ?', description: 'Générez et envoyez des devis, propositions et factures professionnels directement depuis la conversation.' },
      ],
      features: [
        { title: 'Flux de qualification de prospects', description: 'Des flux automatiques multi-étapes qui notent et qualifient les prospects avant l’implication de votre équipe.' },
        { title: 'Prise de rendez-vous', description: 'Un moteur de réservation basé sur la disponibilité réelle — vos clients réservent, reportent et laissent des dépôts directement dans le chat.' },
        { title: 'Génération de documents', description: 'Générez automatiquement devis, factures et propositions à partir des données de conversation.' },
        { title: 'Transfert à un humain', description: 'Transférez fluidement à un commercial quand le prospect est prêt à conclure.' },
        { title: 'Commandes via Catalogue', description: 'Présentez vos produits avec photos et stock en temps réel. Les clients commandent dans le chat ; le stock se réserve instantanément.' },
        { title: 'CRM & Attribution Publicitaire', description: 'Chaque conversation devient un contact. Voyez quelles publicités Facebook apportent des prospects et des revenus WhatsApp — avec le ROAS par campagne.' },
      ],
      stats: [{ label: 'Cycle de vente plus court' }, { label: 'Réponse plus rapide' }, { label: 'Capture de prospects' }],
    },
    support: {
      title: 'Pour le Support',
      headline: 'Un support basé sur l’IA qui ne dort jamais',
      description:
        'Résolvez automatiquement 80 % des demandes de support avec une IA qui connaît votre entreprise sur le bout des doigts. Transférez les problèmes complexes à des humains fluidement. Vos clients obtiennent une aide instantanée, à tout moment.',
      metaDescription: 'Un support WhatsApp basé sur l’IA qui ne dort jamais. Résolvez 80 % des demandes automatiquement avec des réponses instantanées et précises.',
      painPoints: [
        { title: 'Puis-je arrêter de répondre aux mêmes questions encore et encore ?', description: 'Les questions répétitives mangent le temps des agents. L’IA gère le quotidien pour que les humains gèrent le complexe.' },
        { title: 'Puis-je offrir un support 24/7 ?', description: 'Les clients ont besoin d’aide à 23h. Votre agent IA est toujours disponible avec des réponses précises.' },
        { title: 'Puis-je résoudre les problèmes en secondes, pas en heures ?', description: 'Les clients attendent des heures pour une réponse par e-mail. Le support WhatsApp apporte des réponses en secondes.' },
      ],
      features: [
        { title: 'Base de connaissances', description: 'Un système Q&A complet qui gère les questions courantes instantanément.' },
        { title: 'Escalade intelligente', description: 'L’IA sait quand passer à un humain. Transitions fluides, aucun contexte perdu.' },
        { title: 'Boîte de réception d’équipe', description: 'Suivez toutes les conversations, intervenez quand besoin et suivez les métriques de réponse.' },
        { title: 'Super pouvoirs', description: 'Analyse visuelle pour le support basé sur des photos, recherche web pour des réponses en temps réel.' },
      ],
      stats: [{ label: 'Demandes résolues automatiquement' }, { label: 'Charge de travail réduite' }, { label: 'Temps de réponse' }],
    },
  },

  testimonials: {
    'Nimrod Chuang': {
      role: '',
      company: 'BACE Engineering Pte Ltd',
      quote: 'Mes prospects ne sont plus ignorés parce que j’étais trop occupé pour traiter leurs demandes. Avec waai, je peux capter des leads et générer des devis plus rapidement que jamais !',
    },
    'Steven Lau': {
      role: '',
      company: 'OUTSOURCE2US',
      quote: 'Je suis toujours en déplacement. Répondre aux messages était une corvée et une source de distraction. Enfin, j’ai l’esprit tranquille, à tout moment et où que je sois.',
    },
    'Priya Sharma': {
      role: 'Responsable de la réussite client',
      company: 'CloudServe Solutions',
      quote: 'Les flux logiques sont incroyables. Nous avons construit un système complet de qualification de prospects en une journée. Ce qui prenait 30 minutes par prospect à notre équipe commerciale prend maintenant 30 secondes.',
    },
  },

  videoTitles: {
    'FYWVnfP-EEo': 'Une paire de mains supplémentaire',
    PWM3RanP8rQ: 'Tranquillité d’esprit',
    '--8IlCVWsNI': 'Opportunités perdues',
    '14lt0wRuMw4': 'Énigme linguistique ?',
  },
};

export default fr;
