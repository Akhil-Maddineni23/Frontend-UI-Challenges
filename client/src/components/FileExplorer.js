import React , { useState} from 'react';
import '../styles/explorer.css';

import { explorer } from '../data/folderData';
import { Folder } from '../pages/Folder';
import {useTraverseTree } from '../hooks/useTraverseTree';

export const FileExplorer = () => {
    const [explorerData , setExplorerData] = useState(explorer);
    const { insertNode , deleteNode , renameNode } = useTraverseTree();
  
    const handleInsertNode = (folderId, item, isFolder) => {
      const finalTree = insertNode(explorerData, folderId, item, isFolder);
      setExplorerData(finalTree);
    };
  
    const handleDeleteNode = (folderId) => {
      const finalTree = deleteNode(explorerData , folderId , explorerData);
      setExplorerData(finalTree);
    }
  
    const handleRenameNode = (folderId , fileName) => {
      const finalTree = renameNode(explorerData , folderId , fileName);
      setExplorerData(finalTree);
    }
  
    return (
      <div className='main-file-explorer'>
        <Folder 
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleRenameNode={handleRenameNode}
        explorer = {explorerData} />
      </div>
    );
}

