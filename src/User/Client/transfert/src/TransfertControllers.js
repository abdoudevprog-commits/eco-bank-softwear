import * as clientService from './clientService.js'; 

// export const deposit = async (req, res) => {
//     try {
          
//         const depositeOpt = await clientService.deposit(req.body); 
//         res.status(200).json(depositeOpt);
//     } catch (error) {
//         res.status(error.status || 500).json({ error: error.message });
//     }
// };

export const requestTransfer = async (req, res) => {
    try {
        const requestTransferOpt = await clientService.requestTransfer(req.body);
        res.status(200).json(requestTransferOpt);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }   
}; 

export const confirmTransfer = async (req, res) => {
    try {
        const confirmTransferOpt = await clientService.verifyTransfer(req.body);
        res.status(200).json(confirmTransferOpt);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}; 
