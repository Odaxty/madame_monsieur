"# 📚 Guide Complet : Initialiser le Projet sur GitHub

Ce guide vous accompagne pas à pas pour publier votre site Madame Monsieur sur GitHub.

## 🎯 Étape 1 : Créer un compte GitHub (si nécessaire)

1. Allez sur [github.com](https://github.com)
2. Cliquez sur \"Sign up\"
3. Suivez les instructions pour créer votre compte

## 📦 Étape 2 : Créer un nouveau repository sur GitHub

1. Connectez-vous à GitHub
2. Cliquez sur le bouton **\"+\"** en haut à droite, puis **\"New repository\"**
3. Remplissez les informations :
   - **Repository name** : `madame-monsieur-restaurant` (ou le nom de votre choix)
   - **Description** : `Site vitrine élégant pour le restaurant Madame Monsieur à Budapest`
   - **Visibilité** : Choisissez \"Public\" ou \"Private\"
   - ⚠️ **NE PAS** cocher \"Initialize with README\" (on a déjà un README)
4. Cliquez sur **\"Create repository\"**

GitHub vous montrera une page avec des instructions. **Gardez cette page ouverte** !

## 💻 Étape 3 : Initialiser Git localement

Depuis votre terminal, dans le dossier `/app` :

```bash
# 1. Initialiser le repository Git
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le premier commit
git commit -m \"🎉 Initial commit - Site vitrine Madame Monsieur\"

# 4. Renommer la branche en 'main' (standard moderne)
git branch -M main
```

## 🔗 Étape 4 : Connecter votre projet à GitHub

Copiez l'URL de votre repository depuis la page GitHub (format : `https://github.com/votre-username/madame-monsieur-restaurant.git`)

```bash
# Ajouter le repository distant
git remote add origin https://github.com/VOTRE-USERNAME/madame-monsieur-restaurant.git

# Pousser le code vers GitHub
git push -u origin main
```

Si c'est votre première utilisation de Git, vous devrez configurer votre identité :

```bash
git config --global user.name \"Votre Nom\"
git config --global user.email \"votre.email@example.com\"
```

## 🔐 Étape 5 : Authentification GitHub

GitHub peut vous demander de vous authentifier. Deux options :

### Option A : Personal Access Token (Recommandé)

1. Allez dans vos **Settings GitHub** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Cliquez sur **\"Generate new token (classic)\"**
3. Donnez un nom : \"Madame Monsieur Deploy\"
4. Cochez au minimum : `repo` (accès complet aux repos)
5. Cliquez sur **\"Generate token\"**
6. **Copiez le token** (vous ne le reverrez plus !)
7. Utilisez ce token comme mot de passe lors du `git push`

### Option B : SSH (Plus sécurisé)

```bash
# Générer une clé SSH
ssh-keygen -t ed25519 -C \"votre.email@example.com\"

# Ajouter la clé à l'agent SSH
eval \"$(ssh-agent -s)\"
ssh-add ~/.ssh/id_ed25519

# Afficher la clé publique
cat ~/.ssh/id_ed25519.pub
```

Puis :
1. Copiez la clé affichée
2. Allez dans **Settings GitHub** → **SSH and GPG keys** → **New SSH key**
3. Collez votre clé et enregistrez
4. Changez l'URL du remote :
```bash
git remote set-url origin git@github.com:VOTRE-USERNAME/madame-monsieur-restaurant.git
```

## ✅ Étape 6 : Vérifier que tout fonctionne

Retournez sur votre page GitHub et rafraîchissez. Vous devriez voir tous vos fichiers !

## 🔄 Étape 7 : Commandes Git courantes pour la suite

### Après avoir modifié des fichiers

```bash
# Voir les fichiers modifiés
git status

# Ajouter les modifications
git add .

# Créer un commit avec un message descriptif
git commit -m \"✨ Ajout de nouvelles photos de plats\"

# Envoyer vers GitHub
git push
```

### Récupérer les dernières modifications (si vous travaillez depuis plusieurs machines)

```bash
git pull
```

## 📋 Messages de Commit Recommandés

Utilisez des emojis pour clarifier vos commits :

- 🎉 `:tada:` - Initial commit
- ✨ `:sparkles:` - Nouvelle fonctionnalité
- 🐛 `:bug:` - Correction de bug
- 💄 `:lipstick:` - Mise à jour UI/style
- 📝 `:memo:` - Documentation
- 🚀 `:rocket:` - Déploiement
- ♻️ `:recycle:` - Refactoring
- 🔧 `:wrench:` - Configuration

Exemples :
```bash
git commit -m \"✨ Ajout section témoignages clients\"
git commit -m \"💄 Amélioration design du menu\"
git commit -m \"🐛 Correction bug navigation mobile\"
```

## 🚨 Fichiers à NE JAMAIS commit

Le fichier `.gitignore` protège déjà ces fichiers, mais vérifiez :

- ❌ Fichiers `.env` (contiennent des secrets)
- ❌ Dossier `node_modules/` (trop lourd)
- ❌ Logs et fichiers temporaires
- ❌ API keys et mots de passe

## 🌐 Étape 8 : Déployer le site (Optionnel)

### Frontend avec Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **\"Import Project\"**
4. Sélectionnez votre repository `madame-monsieur-restaurant`
5. Configuration :
   - **Framework Preset** : Create React App
   - **Root Directory** : `frontend`
   - **Build Command** : `yarn build`
   - **Output Directory** : `build`
6. Ajoutez la variable d'environnement :
   - `REACT_APP_BACKEND_URL` = URL de votre backend
7. Cliquez sur **\"Deploy\"**

Votre site sera en ligne en quelques minutes ! 🎉

### Backend avec Render

1. Allez sur [render.com](https://render.com)
2. Connectez-vous avec GitHub
3. **\"New +\"** → **\"Web Service\"**
4. Sélectionnez votre repository
5. Configuration :
   - **Name** : `madame-monsieur-api`
   - **Root Directory** : `backend`
   - **Runtime** : Python 3
   - **Build Command** : `pip install -r requirements.txt`
   - **Start Command** : `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. Ajoutez les variables d'environnement (MONGO_URL, DB_NAME)
7. Cliquez sur **\"Create Web Service\"**

## 🆘 Problèmes Courants

### \"fatal: not a git repository\"
```bash
# Vous n'êtes pas dans le bon dossier
cd /app
git init
```

### \"Permission denied (publickey)\"
```bash
# Problème SSH, utilisez HTTPS à la place
git remote set-url origin https://github.com/VOTRE-USERNAME/madame-monsieur-restaurant.git
```

### \"Updates were rejected\"
```bash
# Quelqu'un a modifié le repo en ligne
git pull --rebase
git push
```

## 📞 Besoin d'Aide ?

- 📖 [Documentation Git officielle](https://git-scm.com/doc)
- 📖 [GitHub Guides](https://guides.github.com/)
- 💬 [Stack Overflow](https://stackoverflow.com/questions/tagged/git)

---

Félicitations ! Votre projet est maintenant sur GitHub ! 🎊
"