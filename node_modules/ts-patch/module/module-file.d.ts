import { PatchDetail } from '../patch/patch-detail';
export interface ModuleFile {
    moduleName: string;
    patchDetail?: PatchDetail;
    filePath: string;
    get content(): string;
    getHash(): string;
}
export declare function getModuleFile(filePath: string, loadFullContent?: boolean): ModuleFile;
