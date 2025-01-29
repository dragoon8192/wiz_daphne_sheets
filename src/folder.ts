type Folder = GoogleAppsScript.Drive.Folder;
type FolderIterator = GoogleAppsScript.Drive.FolderIterator;

function test() {
    getOrCreateSibilingFolder('target');
}

// 親フォルダのidを取得
function getParentFolder(): Folder {
    return DriveApp.getFileById(ScriptApp.getScriptId()).getParents().next();
}

// スクリプトと同じフォルダ内に新規フォルダの作成
function getOrCreateSibilingFolder(folderName: string): Folder {
    const parentFolder: Folder = getParentFolder();
    const sameNameFolderIter: FolderIterator = parentFolder.getFoldersByName(folderName);
    if (sameNameFolderIter.hasNext()) {
        return sameNameFolderIter.next();
    } else {
        return parentFolder.createFolder(folderName);
    }
}
