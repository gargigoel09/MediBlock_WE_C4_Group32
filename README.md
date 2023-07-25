
<p align="center"> <img width="100" src=https://github.com/gargigoel09/WE_Project/assets/88873588/33da9abe-8f3e-43bd-bff5-fd2bdf759928 >

  

# <p align="center"> MediBlock - A Medical Record Management Platform using Blockchain  </p>

# Target Theme/Domain: E-Healthcare

# Problem Statement
**INDIA’S THREE-TIER HEALTHCARE SYSTEM (Primary, Secondary and Tertiary Healthcare Centre)**

- Highly centralised & unorganised.
- Depends on Paper-based documentation. 
- Relies on the user (patient) to keep track of their medical records. 

**LIMITATIONS OF ELECTRONIC HEALTH RECORD SYSTEM (EHR)**
- Patient details remain in the same hospital and cannot be shared with other hospitals. This is because the data is not interoperable and semantic.

**RISK OF PATIENT PRIVACY VIOLATION (Identity thefts, Spamming, Financial data crimes)**

- One in five employees working in the healthcare sector is willing to sell sensitive medical data to unauthorised parties. 
- No proof of ownership over personal data. 
- Hospitals Profiting off the patient's data for research purposes.

**FINANCIAL ISSUES**

- Present a disincentive for hospitals and physicians to adopt and implement an EHR. 

# Idea/Solution

MediBlock is a secure and decentralised medical record management platform that provides secure storage of electronic records (EHR) on blockchain by defining granular access rules for the users so that no one without access can see the content of blockchain unless the permission is granted to the user.  

<img width="960" alt="Screenshot 2023-07-25 165004" src="https://github.com/gargigoel09/WE_Project/assets/88873588/c5cb05d8-42a8-426f-a52e-39030bd046c8">

<img width="960" alt="Screenshot 2023-07-25 165025" src="https://github.com/gargigoel09/WE_Project/assets/88873588/a873392e-0026-45f9-9f26-e6b70d381d4a">

<img width="960" alt="Screenshot 2023-07-25 165318" src="https://github.com/gargigoel09/WE_Project/assets/88873588/fb2bf5c9-53b5-41b4-81c3-0a88cccc399d">

<img width="960" alt="Screenshot 2023-07-25 165333" src="https://github.com/gargigoel09/WE_Project/assets/88873588/1f1cae36-a7d4-4867-a102-a0b1c78e52c6">

<img width="960" alt="Screenshot 2023-07-25 165042" src="https://github.com/gargigoel09/WE_Project/assets/88873588/3a80cd5b-399d-441c-b590-d6f4b0e016d9">

# Application Demo Video  
[![Demo](https://github.com/gargigoel09/WE_Project/blob/08ba601a5dc72a770130c389108537b6f1695eea/final_work/images/demo_video.png)](https://youtu.be/jnYZb7QiXzc)

# How we built it?

### Frontend -

- **HTML**
- **CSS** 
- **JavaScript**
### Backend -
- **Metamask:** A software cryptocurrency wallet
- **Ganache:** Local blockchain network for testing purposes
- **Solidity:** To write smart contracts 
- **IPFS:** To store and share files on  a decentralized network

## Installation

The projects requires NodeJS and npm to work. Instructions to install all other dependencies are given below.
### Node modules

1. Move to the project directory and open it in your terminal.
2. Run `npm install` to install project dependenccties.

### Ganache

1. Go to [Ganache homepage](https://truffleframework.com/ganache) and download. 

### IPFS

1. Go to the [github page](https://github.com/ipfs/ipfs-desktop) of IPFS and install IPFS Desktop

### Local server

1. Install Node lite-server by running the following command on your terminal `npm install -g lite-server`

### Metamask

1. Metamask is a browser extension available for Google Chrome, Mozilla Firefox and Brave Browser.
2. Go to the this [link](http://metamask.io/) and add Metamask to your browser.

## Getting the dApp running

### Configuration

#### 1. Ganache
  - Open Ganache and click on settings in the top right corner.
  - Under **Server** tab:
    - Set Hostname to 127.0.0.1 -lo
    - Set Port Number to 8545
    - Enable Automine
  - Under **Accounts & Keys** tab:
    - Enable Autogenerate HD Mnemonic

#### 2. IPFS
  - Fire up your terminal and run `ipfs init`
  - Configuration code -
    ```
    "API": {
		"HTTPHeaders": {
			"Access-Control-Allow-Credentials": [
				"true"
			],
			"Access-Control-Allow-Headers": [
				"X-Requested-With",
				"Range",
				"User-Agent"
			],
			"Access-Control-Allow-Methods ": [
				"PUT",
				"POST",
				"GET"
			],
			"Access-Control-Allow-Origin": [
				"*",
				"https://webui.ipfs.io",
				"http://webui.ipfs.io.ipns.localhost:8080"
			]
		}
	},
    ```
![WhatsApp Image 2023-07-25 at 18 49 33](https://github.com/gargigoel09/WE_Project/assets/88873588/bb1b8e01-a1c1-428d-9595-ae4ec169aa59)

#### 3. Metamask
  - After installing Metamask, click on the metamask icon on your browser.
  - Click on __TRY IT NOW__, if there is an announcement saying a new version of Metamask is available.
  - Click on continue and accept all the terms and conditions after reading them.
  - Stop when Metamask asks you to create a new password. We will come back to this after deploying the contract in the next section.
  
### Smart Contract

1. Install Truffle using `npm install truffle -g`
2. Compile Contracts using `truffle compile`

#### 1. Starting your local development blockchain
  - Open Ganache.
  - Make sure to configure it the way mentioned above.
  
1. Open new Terminal and deploy contracts using `truffle migrate`
2. Copy deployed contract address to src/app.js
   
![WhatsApp Image 2023-07-25 at 18 47 49](https://github.com/gargigoel09/WE_Project/assets/88873588/092b7c46-d655-4856-84ff-4b03aaab03b0)


### Running the dApp

#### 1. Connecting Metamask to our local blockchain
  - Connect metamask to localhost:8485
  - Click on import account
    
![WhatsApp Image 2023-07-25 at 18 46 35](https://github.com/gargigoel09/WE_Project/assets/88873588/5a84bd86-1988-4f98-8664-8ece395757e3)

  - Select any account from ganache and copy the private key to import account into metaMask
    
![WhatsApp Image 2023-07-25 at 18 48 22](https://github.com/gargigoel09/WE_Project/assets/88873588/dfc3df45-6084-4388-9407-40a385381654)


#### 2. Starting IPFS 
  - Start the IPFS Desktop Application
    
![WhatsApp Image 2023-07-25 at 18 48 36](https://github.com/gargigoel09/WE_Project/assets/88873588/5ab09796-4eca-45d7-95f3-5422177e42d9)

  
#### 3. Start a local server
  - Open a new terminal window and navigate to `/YOUR_PROJECT_DIRECTORY/app/`.
  - Run `npm start`.
  - Open `localhost:3000` on your browser.
  - That's it! The dApp is up and running locally.
