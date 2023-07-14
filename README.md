# parthean_technical

To run ui:
- Install [Expo Go](https://docs.expo.dev/get-started/expo-go/)
- Clone and navigate to "parthean-ui-part" folder and run `run.sh` (or `npx expo start`)
- Open Expo Go and follow instructions to connect

To run backend:
- Setup [Docker](https://docs.docker.com/engine/install/) + run Docker Engine
- Clone + navigate to "parthean-backend" and run `run-all.sh`

| Endpoint                 | Method |   Parameters                         |
| --------                 | ------ | ----------------------------         |
|  '/benefits/:cardName'   |  GET   |  cardName: the name of your card*    |

*Right now, only possible cards are Capital One Venture X and Chase Sapphire Reserve