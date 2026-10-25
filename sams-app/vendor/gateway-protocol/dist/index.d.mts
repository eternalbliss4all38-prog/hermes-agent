import { _ as ShutdownEventSchema, a as EventFrame, c as GatewayFrame, d as HelloOkSchema, f as RequestFrame, g as ShutdownEvent, h as ResponseFrameSchema, i as ErrorShapeSchema, l as GatewayFrameSchema, m as ResponseFrame, n as ConnectParamsSchema, o as EventFrameSchema, p as RequestFrameSchema, r as ErrorShape, s as GATEWAY_SERVER_CAPS, t as ConnectParams, u as HelloOk, v as TickEvent, y as TickEventSchema } from "./frames-BPnee-QV.mjs";
import { a as McpAppViewExpiredErrorDetails, c as WizardNotFoundErrorDetails, d as readMissingScopeErrorDetails, i as GatewayErrorDetails, l as isMcpAppViewExpiredError, n as ErrorCodes, o as MissingScopeErrorDetails, r as GatewayErrorDetailCodes, s as UnknownAgentIdErrorDetails, t as ErrorCode, u as readMissingScopeError } from "./gateway-error-details-Btc09cgL.mjs";
import { $ as WorkerHeartbeatResponseFrame, $C as AgentsFilesSetResult, $S as ApprovalTerminalReason, $T as ToolCatalogGroupSchema, $_ as ConversationSendResult, $a as SessionsCompactionBranchResult, $b as BoardWidgetHtmlContentSchema, $c as QuestionResolveParamsSchema, $d as ExecApprovalsNodeSetParams, $f as CronGetParamsSchema, $g as AuditActivityEventV1Schema, $h as TalkSessionOkResult, $i as SessionsViewerPresenceSetResultSchema, $l as NodePendingDrainResultSchema, $m as ChannelsStartParams, $n as TerminalCloseParams, $o as SessionsForkParamsSchema, $p as ConfigApplyParams, $r as TaskSuggestionsCreateResult, $s as SessionDiscussionInfoParamsSchema, $t as PluginCatalogClawHubInstallSchema, $u as GatewaySuspendPrepareBusyResultSchema, $v as SessionsCatalogListParams, $w as SkillsProposalApplyResultSchema, $x as WorkerInferenceCancelResponseFrame, $y as BoardActionParams, A as WORKER_PROTOCOL_FEATURES, AC as AgentKindSchema, AS as ApprovalCancelledReasonSchema, AT as SkillsSearchResult, A_ as AgentsWorkspaceGetResult, Aa as SessionObserverHealthSchema, Ab as BoardTab, Ac as QuestionAnswers, Ad as DevicePairRemoveParamsSchema, Af as WorkerEnvironmentStateSchema, Ag as UsersListResult, Ah as TalkConfigParamsSchema, Ai as SessionMembersListParams, Al as NodeInvokeInputEventSchema, Am as CommandEntrySchema, An as PluginsSessionActionSuccessResultSchema, Ao as SessionsDescribeParams, Ap as SystemAgentSetupActivateResultSchema, Ar as TasksCancelParamsSchema, As as SessionsPreviewParams, At as WorkerTranscriptMessage, Au as ChatHistoryParamsSchema, Av as SessionCatalogDescriptor, Aw as SkillProposalLifecycleEvent, Ax as UiCommandResultSchema, Ay as SessionSuggestionsListParamsSchema, B as WorkerAdmissionFailureReason, BC as AgentsDeleteResultSchema, BS as ApprovalHistoryParamsSchema, BT as SkillsStatusParams, B_ as AgentIdentityResult, Ba as SessionsBranchesListParamsSchema, Bb as BoardViewTicketSchema, Bc as QuestionOption, Bd as DeviceTokenRevokeParamsSchema, Bf as CronRunLogEntry, Bg as UsersSetDisplayNameParams, Bh as TalkSessionCancelOutputParamsSchema, Bi as SessionVisibilitySetParams, Bl as NodePairApproveParams, Bm as ChannelsPairingApproveResult, Bn as PluginsUninstallParamsSchema, Bo as SessionsFilesListParams, Bp as SystemAgentSetupVerifyParamsSchema, Br as TasksListResultSchema, Bs as SessionsSearchHit, Bt as WizardNextParamsSchema, Bu as ChatSendParamsSchema, Bv as SessionCatalogSessionSchema, Bw as SkillsCuratorStatusParams, Bx as SkillsProposalHistoryScanResultSchema, By as SessionTypingParamsSchema, C as WorktreesRemoveResult, CC as TerminalApprovalSnapshotSchema, CS as validateWorkerInferenceTerminalFrame, CT as SkillsProposalUpdateParamsSchema, C_ as ArtifactsListResultSchema, Ca as SessionFileRelevance, Cb as BoardPluginActionParamsSchema, Cc as SecretsReloadParamsSchema, Cd as DevicePairApproveParams, Cf as EnvironmentsStatusParams, Cg as UserProfileSchema, Ch as TalkClientToolCallParams, Ci as SessionMemberAddParams, Cl as NodeDescribeParams, Cm as COMMAND_ARG_NAME_MAX_LENGTH, Cn as PluginsSearchResult, Co as SessionsCompanionStateResult, Cp as SystemAgentChatQuestion, Cr as TerminalUploadParams, Cs as SessionsObserverVisibilityResultSchema, Ct as WorkerTranscriptCommitParamsSchema, Cu as ChatAttachmentSchema, Cv as NonEmptyString, Cw as ModelsProbeParamsSchema, Cx as errorShape, Cy as SessionSuggestionState, D as WORKER_HEARTBEAT_INTERVAL_MS, DC as ValidationError, DS as ApprovalAllowDecision, DT as SkillsProposalsListResultSchema, D_ as AgentsWorkspaceFileSchema, Da as SessionObserverDigest, Db as BoardSizeSchema, Dc as SecretsResolveResult, Dd as DevicePairRejectParams, Df as WorkerEnvironmentMetadata, Dg as UsersLinkEmailResultSchema, Dh as TalkClientTranscriptParams, Di as SessionMemberRemoveParams, Dl as NodeEventResult, Dm as COMMAND_LIST_MAX_ITEMS, Dn as PluginsSessionActionParamsSchema, Do as SessionsCreateResultSchema, Dp as SystemAgentSetupActivateParams, Dr as TaskSummary, Ds as SessionsPluginPatchParamsSchema, Dt as WorkerTranscriptCommitResponseFrameSchema, Du as ChatEvent, Dv as SessionCatalog, Dw as ModelsProbeTargetResultSchema, Dx as UiCommandParams, Dy as SessionSuggestionsAddResult, E as WorktreesRestoreParamsSchema, EC as ProtocolValidator, ES as AllowedApprovalSnapshotSchema, ET as SkillsProposalsListResult, E_ as AgentsWorkspaceFile, Ea as SessionGroupSchema, Eb as BoardSetChatDockCommandSchema, Ec as SecretsResolveParamsSchema, Ed as DevicePairListParamsSchema, Ef as EnvironmentsStatusResultSchema, Eg as UsersLinkEmailResult, Eh as TalkClientToolCallResultSchema, Ei as SessionMemberMutationResultSchema, El as NodeEventParamsSchema, Em as COMMAND_DESCRIPTION_MAX_LENGTH, En as PluginsSessionActionParams, Eo as SessionsCreateResult, Ep as SystemAgentChatResultSchema, Er as TerminalUploadResultSchema, Es as SessionsPluginPatchParams, Et as WorkerTranscriptCommitResponseFrame, Eu as ChatErrorEventSchema, Ev as SessionLabelString, Ew as ModelsProbeTargetResult, Ex as UiCommand, Ey as SessionSuggestionsAddParamsSchema, F as WORKER_RPC_SET_VERSION, FC as AgentsCreateResult, FS as ApprovalGetParams, FT as SkillsSecurityVerdictsResultSchema, F_ as AgentsWorkspaceListResultSchema, Fa as SessionWorktreeInfo, Fb as BoardTabUpdateOpSchema, Fc as QuestionGetResultSchema, Fd as DevicePairSetupCodeParams, Ff as CronDeclarativeAddResult, Fg as UsersSelfResultSchema, Fh as TalkModeParams, Fi as SessionSharingActionSchema, Fl as NodeInvokeRequestEventSchema, Fm as TalkSessionAcknowledgeMarkParams, Fn as PluginsUiDescriptorsParams, Fo as SessionsDiffResultSchema, Fp as SystemAgentSetupDetectParams, Fr as TasksGetResult, Fs as SessionsResolveParamsSchema, Ft as WorkerAdmissionFailureReasonSchema, Fu as ChatMessageGetResultSchema, Fv as SessionCatalogLocatorSchema, Fw as SkillsBinsResultSchema, Fx as UiSidebarCommandSchema, Fy as SessionSuggestionsResolveResult, G as WorkerConnectParams, GC as AgentsFilesGetResult, GS as ApprovalPresentation, GT as SkillsUploadBeginParamsSchema, G_ as ConversationListItem, Ga as SessionsBranchesSwitchResult, Gb as BoardWidgetAppViewResultSchema, Gc as QuestionRequestParamsSchema, Gd as ExecApprovalRequestParams, Gf as CronScratchSetParams, Gg as AuditEventSchema, Gh as TalkSessionCreateParams, Gi as SessionSharingRole, Gl as NodePairRejectParamsSchema, Gm as ChannelsPairingDismissResultSchema, Gn as PluginApprovalResolveParams, Go as SessionsFilesRevealParamsSchema, Gp as SystemChangeKind, Gr as TaskSuggestionResolutionSchema, Gs as SessionsSearchResultSchema, Gt as WizardStartResult, Gu as ChatToolTitlesResult, Gv as SessionsCatalogArchiveResult, Gw as SkillsDetailParamsSchema, Gx as WORKER_INFERENCE_MAX_CONTEXT_MESSAGES, Gy as SessionRow, H as WorkerAdmissionHandshakeSchema, HC as AgentsFileEntrySchema, HS as ApprovalHistoryResultSchema, HT as SkillsUpdateParams, H_ as AgentParamsSchema, Ha as SessionsBranchesListResultSchema, Hb as BoardWidgetAppViewParams, Hc as QuestionRecord, Hd as DeviceTokenRotateParamsSchema, Hf as CronRunsParams, Hg as UsersSetDisplayNameResult, Hh as TalkSessionCancelTurnParamsSchema, Hi as SessionVisibilitySetResult, Hl as NodePairListParams, Hm as ChannelsPairingDismissParams, Hn as PluginsUninstallResultSchema, Ho as SessionsFilesListResult, Hp as SystemAgentSetupVerifyResultSchema, Hr as TaskSuggestionEvent, Hs as SessionsSearchParams, Ht as WizardNextResultSchema, Hu as ChatStatusEventSchema, Hv as SessionCatalogTranscriptItemSchema, Hw as SkillsCuratorStatusResult, Hx as SkillsProposalHistoryStatusParamsSchema, Hy as SessionTypingResultSchema, I as WORKER_TRANSCRIPT_COMMIT_PROTOCOL_FEATURE, IC as AgentsCreateResultSchema, IS as ApprovalGetParamsSchema, IT as SkillsSkillCardParams, I_ as AgentEvent, Ia as SessionWorktreeInfoSchema, Ib as BoardTabsReorderOpSchema, Ic as QuestionListParams, Id as DevicePairSetupCodeParamsSchema, If as CronGetParams, Ig as UsersSetAvatarParams, Ih as TalkModeParamsSchema, Ii as SessionSharingEvent, Il as NodeInvokeResultParams, Im as TalkSessionAcknowledgeMarkParamsSchema, In as PluginsUiDescriptorsParamsSchema, Io as SessionsFilesGetParams, Ip as SystemAgentSetupDetectParamsSchema, Ir as TasksGetResultSchema, Is as SessionsRewindParams, It as WorkerProtocolCloseReasonSchema, Iu as ChatMetadataParams, Iv as SessionCatalogPullRequestSummary, Iw as SkillsCuratorActionParams, Ix as UiSplitCommandSchema, Iy as SessionSuggestionsResolveResultSchema, J as WorkerErrorShape, JC as AgentsFilesListParamsSchema, JS as ApprovalResolveParamsSchema, JT as SkillsUploadCommitParams, J_ as ConversationListParamsSchema, Ja as SessionsCleanupParamsSchema, Jb as BoardWidgetDeclared, Jc as QuestionRequestResult, Jd as ExecApprovalResolveParamsSchema, Jf as CronUpdateParams, Jg as AuditListResult, Jh as TalkSessionCreateResultSchema, Ji as SessionVisibilitySchema, Jl as NodePendingAckParams, Jm as ChannelsPairingListResult, Jn as TerminalAckResultSchema, Jo as SessionsFilesSetParams, Jp as SystemChangeSourceSchema, Jr as TaskSuggestionsAcceptParamsSchema, Js as SessionsUsageParams, Jt as WizardStatusParamsSchema, Ju as LogsTailParamsSchema, Jv as SessionsCatalogContinueParamsSchema, Jw as SkillsInstallParams, Jx as WORKER_INFERENCE_PROTOCOL_FEATURE, Jy as SessionToolOverridesSchema, K as WorkerConnectRequestFrame, KC as AgentsFilesGetResultSchema, KS as ApprovalPresentationSchema, KT as SkillsUploadChunkParams, K_ as ConversationListItemSchema, Ka as SessionsBranchesSwitchResultSchema, Kb as BoardWidgetContent, Kc as QuestionRequestQuestion, Kd as ExecApprovalRequestParamsSchema, Kf as CronScratchSetResult, Kg as AuditListParams, Kh as TalkSessionCreateParamsSchema, Ki as SessionSharingRoleSchema, Kl as NodePairRemoveParams, Km as ChannelsPairingListParams, Kn as PluginApprovalResolveParamsSchema, Ko as SessionsFilesRevealResult, Kp as SystemChangeKindSchema, Kr as TaskSuggestionSchema, Ks as SessionsSendParams, Kt as WizardStartResultSchema, Ku as ChatToolTitlesResultSchema, Kv as SessionsCatalogArchiveResultSchema, Kw as SkillsDetailResult, Kx as WORKER_INFERENCE_MAX_OUTPUT_TOKENS, Ky as SessionRowSchema, L as WORKER_TRANSCRIPT_MAX_BATCH_MESSAGES, LC as AgentsDeleteParams, LS as ApprovalGetResult, LT as SkillsSkillCardParamsSchema, L_ as AgentEventSchema, La as SessionsAbortParams, Lb as BoardTicketEventParamsSchema, Lc as QuestionListParamsSchema, Ld as DevicePairSetupCodeResult, Lf as CronJob, Lg as UsersSetAvatarParamsSchema, Lh as TalkSessionAppendAudioParams, Li as SessionSharingEventSchema, Ll as NodeInvokeResultParamsSchema, Lm as ChannelsPairingAccount, Ln as PluginsUiDescriptorsResult, Lo as SessionsFilesGetParamsSchema, Lp as SystemAgentSetupDetectResult, Lr as TasksListParams, Ls as SessionsRewindParamsSchema, Lt as WizardCancelParams, Lu as ChatMetadataParamsSchema, Lv as SessionCatalogPullRequestSummarySchema, Lw as SkillsCuratorActionParamsSchema, Lx as SkillsProposalHistoryScanParams, Ly as SessionTypingEvent, M as WORKER_PROTOCOL_MAX_FEATURE_LENGTH, MC as AgentSummarySchema, MS as ApprovalDecisionSchema, MT as SkillsSecurityVerdictsParams, M_ as AgentsWorkspaceListParams, Ma as SessionObserverPlanProgressSchema, Mb as BoardTabDeleteOpSchema, Mc as QuestionGetParams, Md as DevicePairRenameParamsSchema, Mf as WorkerTunnelStatusSchema, Mg as UsersSelfParams, Mh as TalkConfigResultSchema, Mi as SessionMembersListResult, Ml as NodeInvokeParamsSchema, Mm as CommandsListParamsSchema, Mn as PluginsSetEnabledParamsSchema, Mo as SessionsDiffParams, Mp as SystemAgentSetupAuthStartParamsSchema, Mr as TasksCancelResultSchema, Ms as SessionsResetParams, Mt as WORKER_PROTOCOL_MAX_FRAME_ID_LENGTH, Mu as ChatInjectParamsSchema, Mv as SessionCatalogHost, Mw as SkillsBinsParams, Mx as UiFocusCommandSchema, My as SessionSuggestionsListResultSchema, N as WORKER_PROTOCOL_MAX_METHOD_LENGTH, NC as AgentsCreateParams, NS as ApprovalDeniedReasonSchema, NT as SkillsSecurityVerdictsParamsSchema, N_ as AgentsWorkspaceListParamsSchema, Na as SessionOperationEvent, Nb as BoardTabIdSchema, Nc as QuestionGetParamsSchema, Nd as DevicePairRequestedEventSchema, Nf as CronAddParams, Ng as UsersSelfParamsSchema, Nh as TalkEvent, Ni as SessionMembersListResultSchema, Nl as NodeInvokeProgressParams, Nm as CommandsListResult, Nn as PluginsSetEnabledResult, No as SessionsDiffParamsSchema, Np as SystemAgentSetupAuthStartResult, Nr as TasksGetParams, Ns as SessionsResetParamsSchema, Nt as WORKER_PROTOCOL_MAX_IDENTIFIER_LENGTH, Nu as ChatMessageGetParamsSchema, Nv as SessionCatalogHostSchema, Nw as SkillsBinsParamsSchema, Nx as UiNavigateCommandSchema, Ny as SessionSuggestionsResolveParams, O as WORKER_LAUNCH_V2_PROTOCOL_FEATURE, OC as formatValidationErrors, OS as ApprovalAllowDecisionSchema, OT as SkillsSearchParams, O_ as AgentsWorkspaceGetParams, Oa as SessionObserverDigestSchema, Ob as BoardSnapshot, Oc as SecretsResolveResultSchema, Od as DevicePairRejectParamsSchema, Of as WorkerEnvironmentMetadataSchema, Og as UsersListParams, Oh as TalkClientTranscriptParamsSchema, Oi as SessionMemberRemoveParamsSchema, Ol as NodeEventResultSchema, Om as COMMAND_NAME_MAX_LENGTH, On as PluginsSessionActionResult, Oo as SessionsDeleteParams, Op as SystemAgentSetupActivateParamsSchema, Or as TaskSummarySchema, Os as SessionsPluginPatchResult, Ot as WorkerTranscriptCommitResult, Ou as ChatEventSchema, Ov as SessionCatalogCapabilities, Ow as SkillProposalEvaluation, Ox as UiCommandParamsSchema, Oy as SessionSuggestionsAddResultSchema, P as WORKER_PROTOCOL_METHODS, PC as AgentsCreateParamsSchema, PS as ApprovalExpiredReasonSchema, PT as SkillsSecurityVerdictsResult, P_ as AgentsWorkspaceListResult, Pa as SessionOperationEventSchema, Pb as BoardTabSchema, Pc as QuestionGetResult, Pd as DevicePairResolvedEventSchema, Pf as CronAddResult, Pg as UsersSelfResult, Ph as TalkEventSchema, Pi as SessionSharingAction, Pl as NodeInvokeProgressParamsSchema, Pm as CommandsListResultSchema, Pn as PluginsSetEnabledResultSchema, Po as SessionsDiffResult, Pp as SystemAgentSetupAuthStartResultSchema, Pr as TasksGetParamsSchema, Ps as SessionsResolveParams, Pt as WORKER_PROTOCOL_MAX_PAYLOAD_BYTES, Pu as ChatMessageGetResult, Pv as SessionCatalogLocator, Pw as SkillsBinsResult, Px as UiPanelCommandSchema, Py as SessionSuggestionsResolveParamsSchema, Q as WorkerHeartbeatRequestFrameSchema, QC as AgentsFilesSetParamsSchema, QS as ApprovalSnapshotSchema, QT as ToolCatalogGroup, Q_ as ConversationSendParamsSchema, Qa as SessionsCompactionBranchParamsSchema, Qb as BoardWidgetHeightModeSchema, Qc as QuestionResolveParams, Qd as ExecApprovalsNodeGetParamsSchema, Qf as CronDeliverySchema, Qg as AuditActivityEventV1, Qh as TalkSessionJoinResultSchema, Qi as SessionsViewerPresenceSetResult, Ql as NodePendingDrainResult, Qm as ChannelsLogoutParamsSchema, Qn as TerminalAttachResultSchema, Qo as SessionsForkParams, Qp as SystemChangesListResultSchema, Qr as TaskSuggestionsCreateParamsSchema, Qs as SessionDiscussionInfoParams, Qt as WizardStepSchema, Qu as GatewaySuspendBlockerSchema, Qv as SessionsCatalogHostEventSchema, Qw as SkillsProposalApplyResult, Qx as WorkerInferenceCancelRequestFrameSchema, Qy as BOARD_WIDGET_TOOL_MAX_LENGTH, R as WORKER_TRANSCRIPT_MAX_CONTENT_PARTS, RC as AgentsDeleteParamsSchema, RS as ApprovalGetResultSchema, RT as SkillsSkillCardResult, R_ as AgentIdentityParams, Ra as SessionsAbortParamsSchema, Rb as BoardUpdateParams, Rc as QuestionListResult, Rd as DevicePairSetupCodeResultSchema, Rf as CronListParams, Rg as UsersSetAvatarResult, Rh as TalkSessionAppendAudioParamsSchema, Ri as SessionSharingIdentity, Rl as NodeListParams, Rm as ChannelsPairingApproveParams, Rn as PluginsUiDescriptorsResultSchema, Ro as SessionsFilesGetResult, Rp as SystemAgentSetupDetectResultSchema, Rr as TasksListParamsSchema, Rs as SessionsRewindResult, Rt as WizardCancelParamsSchema, Ru as ChatRunStartupPhase, Rv as SessionCatalogSchema, Rw as SkillsCuratorActionResult, Rx as SkillsProposalHistoryScanParamsSchema, Ry as SessionTypingEventSchema, S as WorktreesRemoveParamsSchema, SC as TerminalApprovalSnapshot, SS as validateWorkerInferenceStartParams, ST as SkillsProposalUpdateParams, S_ as ArtifactsListResult, Sa as SessionFilePreviewKindSchema, Sb as BoardOpSchema, Sc as isCloudWorkerPlacementState, Sd as FsListDirResultSchema, Sf as EnvironmentsListResultSchema, Sg as UserProfileAvatarMimeSchema, Sh as TalkClientSteerParamsSchema, Si as SessionMember, Sl as WebPushVapidPublicKeyParamsSchema, Sm as COMMAND_ARG_DESCRIPTION_MAX_LENGTH, Sn as PluginsSearchParamsSchema, So as SessionsCompanionStateParamsSchema, Sp as SystemAgentChatParamsSchema, Sr as TerminalTextResultSchema, Ss as SessionsObserverVisibilityResult, St as WorkerTranscriptCommitParams, Su as ChatAbortedEventSchema, Sv as InputProvenanceSchema, Sw as ModelsProbeParams, Sx as buildMissingScopeErrorDetails, Sy as SessionSuggestionSchema, T as WorktreesRestoreParams, TC as isWellFormedApprovalId, TS as AllowedApprovalSnapshot, TT as SkillsProposalsListParamsSchema, T_ as AgentsWorkspaceEntrySchema, Ta as SessionGroup, Tb as BoardPromptAuthorizeParamsSchema, Tc as SecretsResolveParams, Td as DevicePairListParams, Tf as EnvironmentsStatusResult, Tg as UsersLinkEmailParamsSchema, Th as TalkClientToolCallResult, Ti as SessionMemberMutationResult, Tl as NodeEventParams, Tm as COMMAND_CHOICE_VALUE_MAX_LENGTH, Tn as PluginsSessionActionFailureResultSchema, To as SessionsCreateParams, Tp as SystemAgentChatResult, Tr as TerminalUploadResult, Ts as SessionsPatchParamsSchema, Tt as WorkerTranscriptCommitRequestFrameSchema, Tu as ChatDeltaEventSchema, Tv as SecretRefSchema, Tw as ModelsProbeResultSchema, Tx as UiClosePaneCommandSchema, Ty as SessionSuggestionsAddParams, U as WorkerAdmissionResponseFrame, UC as AgentsFilesGetParams, US as ApprovalKind, UT as SkillsUpdateParamsSchema, U_ as AgentWaitParams, Ua as SessionsBranchesSwitchParams, Ub as BoardWidgetAppViewParamsSchema, Uc as QuestionRecordSchema, Ud as ExecApprovalGetParams, Uf as CronScratchGetParams, Ug as UsersSetDisplayNameResultSchema, Uh as TalkSessionCloseParams, Ui as SessionVisibilitySetResultSchema, Ul as NodePairListParamsSchema, Um as ChannelsPairingDismissParamsSchema, Un as PluginApprovalRequestParams, Uo as SessionsFilesListResultSchema, Up as SystemChangeEntry, Ur as TaskSuggestionEventSchema, Us as SessionsSearchParamsSchema, Ut as WizardStartParams, Uu as ChatToolTitlesParams, Uv as SessionsCatalogArchiveParams, Uw as SkillsCuratorStatusResultSchema, Ux as validateSkillsProposalHistoryScanParams, Uy as SessionCreatedActor, V as WorkerAdmissionHandshake, VC as AgentsFileEntry, VS as ApprovalHistoryResult, VT as SkillsStatusParamsSchema, V_ as AgentIdentityResultSchema, Va as SessionsBranchesListResult, Vb as BoardWidget, Vc as QuestionOptionSchema, Vd as DeviceTokenRotateParams, Vf as CronRunParams, Vg as UsersSetDisplayNameParamsSchema, Vh as TalkSessionCancelTurnParams, Vi as SessionVisibilitySetParamsSchema, Vl as NodePairApproveParamsSchema, Vm as ChannelsPairingApproveResultSchema, Vn as PluginsUninstallResult, Vo as SessionsFilesListParamsSchema, Vp as SystemAgentSetupVerifyResult, Vr as TaskSuggestion, Vs as SessionsSearchHitSchema, Vt as WizardNextResult, Vu as ChatStatusEvent, Vv as SessionCatalogTranscriptItem, Vw as SkillsCuratorStatusParamsSchema, Vx as SkillsProposalHistoryStatusParams, Vy as SessionTypingResult, W as WorkerAdmissionResponseFrameSchema, WC as AgentsFilesGetParamsSchema, WS as ApprovalKindSchema, WT as SkillsUploadBeginParams, W_ as AgentWaitParamsSchema, Wa as SessionsBranchesSwitchParamsSchema, Wb as BoardWidgetAppViewResult, Wc as QuestionRequestParams, Wd as ExecApprovalGetParamsSchema, Wf as CronScratchGetResult, Wg as AuditEvent, Wh as TalkSessionCloseParamsSchema, Wi as SESSION_VISIBILITY_VALUES, Wl as NodePairRejectParams, Wm as ChannelsPairingDismissResult, Wn as PluginApprovalRequestParamsSchema, Wo as SessionsFilesRevealParams, Wp as SystemChangeEntrySchema, Wr as TaskSuggestionResolution, Ws as SessionsSearchResult, Wt as WizardStartParamsSchema, Wu as ChatToolTitlesParamsSchema, Wv as SessionsCatalogArchiveParamsSchema, Ww as SkillsDetailParams, Wx as validateSkillsProposalHistoryStatusParams, Wy as SessionCreatedActorSchema, X as WorkerHeartbeatParamsSchema, XC as AgentsFilesListResultSchema, XS as ApprovalResolveResultSchema, XT as ToolCatalogEntry, X_ as ConversationListResultSchema, Xa as SessionsCompactParamsSchema, Xb as BoardWidgetGrantParams, Xc as QuestionRequestedEvent, Xd as ExecApprovalsGetParamsSchema, Xf as CronAddResultSchema, Xg as AuditActivityAgentRunV1, Xh as TalkSessionJoinParamsSchema, Xi as SessionsViewerPresenceSetParams, Xl as NodePendingDrainParams, Xm as ChannelsPairingRequest, Xn as TerminalAttachParamsSchema, Xo as SessionsFilesSetResult, Xp as SystemChangesListParamsSchema, Xr as TaskSuggestionsAcceptResultSchema, Xs as SessionsCreateParamsSchema, Xt as WizardStatusResultSchema, Xu as LogsTailResultSchema, Xv as SessionsCatalogContinueResultSchema, Xw as SkillsProposalActionParams, Xx as WorkerInferenceCancelParams, Xy as BOARD_CRON_TRIGGER_PREFIX, Y as WorkerHeartbeatParams, YC as AgentsFilesListResult, YS as ApprovalResolveResult, YT as SkillsUploadCommitParamsSchema, Y_ as ConversationListResult, Ya as SessionsCompactParams, Yb as BoardWidgetDeclaredSchema, Yc as QuestionRequestResultSchema, Yd as ExecApprovalsGetParams, Yf as CronAddParamsSchema, Yg as AuditListResultSchema, Yh as TalkSessionJoinParams, Yi as SESSION_VIEWER_PRESENCE_MAX_KEYS, Yl as NodePendingAckParamsSchema, Ym as ChannelsPairingListResultSchema, Yn as TerminalAttachParams, Yo as SessionsFilesSetParamsSchema, Yp as SystemChangesListParams, Yr as TaskSuggestionsAcceptResult, Ys as SessionsUsageParamsSchema, Yt as WizardStatusResult, Yu as LogsTailResult, Yv as SessionsCatalogContinueResult, Yw as SkillsInstallParamsSchema, Yx as WORKER_PROTOCOL_MAX_INFERENCE_PAYLOAD_BYTES, Yy as BOARD_CRON_JOB_ID_MAX_LENGTH, Z as WorkerHeartbeatRequestFrame, ZC as AgentsFilesSetParams, ZS as ApprovalSnapshot, ZT as ToolCatalogEntrySchema, Z_ as ConversationSendParams, Za as SessionsCompactionBranchParams, Zb as BoardWidgetGrantParamsSchema, Zc as QuestionRequestedEventSchema, Zd as ExecApprovalsNodeGetParams, Zf as CronDeclarativeAddResultSchema, Zg as AuditActivityAgentRunV1Schema, Zh as TalkSessionJoinResult, Zi as SessionsViewerPresenceSetParamsSchema, Zl as NodePendingDrainParamsSchema, Zm as ChannelsLogoutParams, Zn as TerminalAttachResult, Zo as SessionsFilesSetResultSchema, Zp as SystemChangesListResult, Zr as TaskSuggestionsCreateParams, Zs as SessionDiscussionInfo, Zt as WizardStep, Zu as GatewaySuspendBlocker, Zv as SessionsCatalogHostEvent, Zw as SkillsProposalActionParamsSchema, Zx as WorkerInferenceCancelRequestFrame, Zy as BOARD_DATA_BINDING_ID_MAX_LENGTH, _ as WorktreesListParams, _C as SessionApprovalEventSchema, _E as ToolsInvokeParams, _S as WorkerInferenceTerminalFrame, _T as SkillsProposalRequestRevisionParamsSchema, __ as ArtifactsGetParamsSchema, _a as SessionFileEntry, _b as BoardGetParamsSchema, _c as SessionsReclaimParams, _d as FsDirEntry, _f as EnvironmentsDestroyResult, _g as WebLoginStartParams, _h as TalkClientCreateResult, _i as PresenceEntrySchema, _l as WebPushTestParams, _m as UpdateStatusParams, _n as PluginsRefreshParams, _o as SessionsCompanionResetParams, _p as SystemAgentChatHistoryResult, _r as TerminalSessionInfo, _s as SessionsMessagesSubscribeParamsSchema, _t as WorkerProtocolCloseReason, _u as NodeSkillDescriptorSchema, _v as WakeParamsSchema, _w as ModelsAuthStatusParamsSchema, _x as GatewayErrorDetailsSchema, _y as SessionSuggestionActionSchema, a as WorktreeRepositoryStatus, aC as ExecApprovalPresentation, aE as ToolsCatalogResultSchema, aS as WorkerInferenceEventFrame, aT as SkillsProposalEvaluateResultSchema, a_ as AuditActivityListResultSchema, aa as SessionCompanionExchange, ab as BoardChatDockSchema, ac as SessionDiscussionOpenResult, ad as GatewaySuspendResumeParams, af as ExecApprovalsSnapshot, ag as TalkSessionTurnParams, ah as ChannelsStopParams, ai as TaskSuggestionsListParams, al as QuestionStatus, am as ConfigSchemaLookupParams, an as PluginControlUiDescriptorSchema, ao as SessionsCompactionListParams, ap as CronRunLogEntrySchema, ar as TerminalExitEvent, as as SessionsGroupsListParamsSchema, at as WorkerLiveEventErrorDetailsSchema, au as NodePluginToolDescriptorSchema, av as ConversationTurnParams, aw as AgentsUpdateParams, ax as BoardWidgetNameSchema, ay as SessionsCatalogReadResult, b as WorktreesListResultSchema, bC as SystemAgentApprovalPresentation, bE as ToolsInvokeResultSchema, bS as validateWorkerInferenceCancelParams, bT as SkillsProposalReviseParams, b_ as ArtifactsListParams, ba as SessionFileKindSchema, bb as BoardMcpAppDescriptorSchema, bc as SessionsReclaimResultSchema, bd as FsListDirParamsSchema, bf as EnvironmentsListParamsSchema, bg as WebLoginWaitParamsSchema, bh as TalkClientMutationResultSchema, bi as StateVersion, bl as WebPushUnsubscribeParamsSchema, bm as COMMAND_ARGS_MAX_ITEMS, bn as PluginsRefreshResultSchema, bo as SessionsCompanionResetResultSchema, bp as SystemAgentChatHistoryTurnSchema, br as TerminalTextParamsSchema, bs as SessionsObserverVisibilityParams, bt as WorkerTranscriptCommitErrorShape, bu as ChatAbortParams, bv as GatewayClientIdSchema, bw as ModelsListResult, bx as UnknownAgentIdErrorDetailsSchema, by as SessionSuggestionResolution, c as WorktreesBranchesParamsSchema, cC as ExpiredApprovalSnapshotSchema, cE as ToolsEffectiveGroup, cS as WorkerInferenceModelRefSchema, cT as SkillsProposalEventsListResult, c_ as AuditActivityToolActionV1, ca as SessionDiffFileSchema, cb as BoardCommandEventSchema, cc as SessionDiscussionStateSchema, cd as GatewaySuspendResumeResultSchema, cf as EnvironmentStatusSchema, cg as TalkSessionTurnResultSchema, ch as TalkAgentControlResultSchema, ci as TaskSuggestionsListResultSchema, cl as QuestionWaitAnswerParamsSchema, cm as ConfigSchemaLookupResultSchema, cn as PluginSearchResultEntrySchema, co as SessionsCompactionListResultSchema, cp as CronScratchGetParamsSchema, cr as TerminalInputParamsSchema, cs as SessionsGroupsMutationResult, ct as WorkerLiveEventParams, cu as NodePresenceActivityPayload, cv as ConversationTurnReplySchema, cw as AgentsUpdateResultSchema, cx as BoardWidgetPluginPropsSchema, cy as MemoryMigrationItem, d as WorktreesCreateParams, dC as PendingSessionApprovalEventSchema, dE as ToolsEffectiveNoticeSchema, dS as WorkerInferenceStartParams, dT as SkillsProposalInspectParamsSchema, d_ as ArtifactSummarySchema, da as SessionFileBrowserEntry, db as BoardDataReadParams, dc as SessionPlacementSchema, dd as GatewaySuspendStatusReadyResultSchema, df as EnvironmentsCreateParams, dg as TalkSpeakResult, dh as TalkCatalogResult, di as validateSystemEventParams, dl as PushTestParams, dm as ConfigSchemaResponse, dn as PluginsInstallResult, do as SessionsCompactionRestoreResult, dp as CronScratchSetParamsSchema, dr as TerminalOpenParams, ds as SessionsGroupsPutParamsSchema, dt as WorkerLiveEventRequestFrameSchema, du as NodePresenceAlivePayloadSchema, dv as MessageActionParams, dw as GatewayAgentRuntime, dx as BoardWidgetPutContentSchema, dy as MigrationsMemoryApplyParamsSchema, eC as ApprovalTerminalReasonSchema, eE as ToolCatalogProfile, eS as WorkerInferenceCancelResponseFrameSchema, eT as SkillsProposalCreateParams, e_ as AuditActivityInboundMessageV1, ea as SESSION_OBSERVER_HEALTH_VALUES, eb as BoardActionParamsSchema, ec as SessionDiscussionInfoResult, ed as GatewaySuspendPrepareParams, ef as ExecApprovalsNodeSetParamsSchema, eg as TalkSessionOkResultSchema, eh as ChannelsStartParamsSchema, ei as TaskSuggestionsCreateResultSchema, el as QuestionResolveResult, em as ConfigApplyParamsSchema, en as PluginCatalogEntry, eo as SessionsCompactionBranchResultSchema, ep as CronJobSchema, er as TerminalCloseParamsSchema, es as SessionsForkResult, et as WorkerHeartbeatResponseFrameSchema, eu as NodePendingEnqueueParams, ev as ConversationSendResultSchema, ew as AgentsFilesSetResultSchema, ex as BoardWidgetMaterializedContent, ey as SessionsCatalogListParamsSchema, f as WorktreesCreateParamsSchema, fC as PluginApprovalPresentation, fE as ToolsEffectiveParams, fS as WorkerInferenceStartRequestFrame, fT as SkillsProposalInspectResult, f_ as ArtifactsDownloadParams, fa as SessionFileBrowserEntrySchema, fb as BoardDataReadParamsSchema, fc as SessionPlacementStateSchema, fd as GatewaySuspendStatusResult, ff as EnvironmentsCreateParamsSchema, fg as TalkSpeakResultSchema, fh as TalkCatalogResultSchema, fi as SystemInfoParams, fl as PushTestParamsSchema, fm as ConfigSchemaResponseSchema, fn as PluginsInstallResultSchema, fo as SessionsCompactionRestoreResultSchema, fp as CronScratchSetResultSchema, fr as TerminalOpenParamsSchema, fs as SessionsGroupsRenameParams, ft as WorkerLiveEventResponseFrame, fu as NodePresenceAliveReason, fv as MessageActionParamsSchema, fw as ModelChoice, fx as BoardWidgetPutParams, fy as MigrationsMemoryApplyResult, g as WorktreesGcResultSchema, gC as SessionApprovalEvent, gE as ToolsInvokeErrorSchema, gS as WorkerInferenceStartResult, gT as SkillsProposalRequestRevisionParams, g_ as ArtifactsGetParams, ga as SessionFileContentEncodingSchema, gb as BoardGetParams, gc as SessionsDispatchResultSchema, gd as GatewaySuspendTaskBlockerSchema, gf as EnvironmentsDestroyParamsSchema, gg as TtsSpeakResultSchema, gh as TalkClientCreateParamsSchema, gi as PresenceEntry, gl as WebPushSubscribeParamsSchema, gm as UpdateRunParamsSchema, gn as PluginsListResultSchema, go as SessionsCompanionAskResultSchema, gp as SystemAgentChatHistoryParamsSchema, gr as TerminalResizeParamsSchema, gs as SessionsMessagesSubscribeParams, gt as WorkerLiveEventSchema, gu as NodeSkillDescriptor, gv as WakeParams, gw as ModelsAuthStatusParams, gx as BoardWidgetSchema, gy as SessionSuggestionAction, h as WorktreesGcResult, hC as PluginApprovalSeveritySchema, hE as ToolsEffectiveResultSchema, hS as WorkerInferenceStartResponseFrameSchema, hT as SkillsProposalRecordResultSchema, h_ as ArtifactsDownloadResultSchema, ha as SessionFileContentEncoding, hb as BoardFocusTabCommandSchema, hc as SessionsDispatchResult, hd as GatewaySuspendTaskBlocker, hf as EnvironmentsDestroyParams, hg as TtsSpeakResult, hh as TalkClientCreateParams, hi as SystemInfoResultSchema, hl as WebPushSubscribeParams, hm as UpdateRunParams, hn as PluginsListResult, ho as SessionsCompanionAskResult, hp as SystemAgentChatHistoryParams, hr as TerminalResizeParams, hs as SessionsListParamsSchema, ht as WorkerLiveEventResultSchema, hu as NodeRenameParamsSchema, hv as SendParamsSchema, hw as ModelsAuthLogoutParamsSchema, hx as BoardWidgetResizeOpSchema, hy as SessionSuggestion, i as WorktreeRecordSchema, iC as DeniedApprovalSnapshotSchema, iE as ToolsCatalogResult, iS as WorkerInferenceErrorShape, iT as SkillsProposalEvaluateResult, i_ as AuditActivityListResult, ia as SessionCompactionCheckpointSchema, ib as BoardChangedEventSchema, ic as SessionDiscussionOpenParamsSchema, id as GatewaySuspendPrepareResultSchema, if as ExecApprovalsSetParamsSchema, ig as TalkSessionSubmitToolResultParamsSchema, ih as ChannelsStatusResultSchema, ii as TaskSuggestionsDismissResultSchema, il as QuestionSchema, im as ConfigPatchParamsSchema, in as PluginControlUiDescriptor, io as SessionsCompactionGetResultSchema, ip as CronRemoveParamsSchema, ir as TerminalEventSchema, is as SessionsGroupsListParams, it as WorkerLiveEventErrorDetails, iu as NodePluginToolDescriptor, iv as ConversationTurnCancelResultSchema, iw as AgentsListResultSchema, ix as BoardWidgetMoveOpSchema, iy as SessionsCatalogReadParamsSchema, j as WORKER_PROTOCOL_MAX_FEATURES, jC as AgentSummary, jS as ApprovalDecision, jT as SkillsSearchResultSchema, j_ as AgentsWorkspaceGetResultSchema, ja as SessionObserverPlanProgress, jb as BoardTabCreateOpSchema, jc as QuestionAnswersSchema, jd as DevicePairRenameParams, jf as WorkerTunnelStatus, jg as UsersListResultSchema, jh as TalkConfigResult, ji as SessionMembersListParamsSchema, jl as NodeInvokeParams, jm as CommandsListParams, jn as PluginsSetEnabledParams, jo as SessionsDescribeParamsSchema, jp as SystemAgentSetupAuthStartParams, jr as TasksCancelResult, js as SessionsPreviewParamsSchema, jt as WorkerTranscriptMessageSchema, ju as ChatInjectParams, jv as SessionCatalogDescriptorSchema, jw as SkillProposalLifecycleEventSchema, jx as UiCommandSchema, jy as SessionSuggestionsListResult, k as WORKER_LIVE_EVENT_PROTOCOL_FEATURE, kC as AgentKind, kS as ApprovalAllowedReasonSchema, kT as SkillsSearchParamsSchema, k_ as AgentsWorkspaceGetParamsSchema, ka as SessionObserverHealth, kb as BoardSnapshotSchema, kc as Question, kd as DevicePairRemoveParams, kf as WorkerEnvironmentState, kg as UsersListParamsSchema, kh as TalkConfigParams, ki as SessionMemberSchema, kl as NodeInvokeInputEvent, km as CommandEntry, kn as PluginsSessionActionResultSchema, ko as SessionsDeleteParamsSchema, kp as SystemAgentSetupActivateResult, kr as TasksCancelParams, ks as SessionsPluginPatchResultSchema, kt as WorkerTranscriptCommitResultSchema, ku as ChatFinalEventSchema, kv as SessionCatalogCapabilitiesSchema, kw as SkillProposalEvaluationSchema, kx as UiCommandResult, ky as SessionSuggestionsListParams, l as WorktreesBranchesResult, lC as PendingApprovalSnapshot, lE as ToolsEffectiveGroupSchema, lS as WorkerInferenceOptions, lT as SkillsProposalEventsListResultSchema, l_ as AuditActivityToolActionV1Schema, la as SessionDiffFileStatus, lb as BoardCommandSchema, lc as SessionPlacement, ld as GatewaySuspendStatusParams, lf as EnvironmentSummary, lg as TalkSpeakParams, lh as TalkCatalogParams, li as SYSTEM_PRESENCE_CLEAR_LAST_INPUT_TAG, ll as QuestionWaitAnswerResult, lm as ConfigSchemaParams, ln as PluginsInstallParams, lo as SessionsCompactionRestoreParams, lp as CronScratchGetResultSchema, lr as TerminalListResult, ls as SessionsGroupsMutationResultSchema, lt as WorkerLiveEventParamsSchema, lu as NodePresenceActivityPayloadSchema, lv as ConversationTurnResult, lw as AuthProbeStatus, lx as BoardWidgetPresentationSchema, ly as MemoryMigrationProviderPlan, m as WorktreesGcParamsSchema, mC as PluginApprovalSeverity, mE as ToolsEffectiveResult, mS as WorkerInferenceStartResponseFrame, mT as SkillsProposalRecordResult, m_ as ArtifactsDownloadResult, ma as SessionFileBrowserResultSchema, mb as BoardEventParamsSchema, mc as SessionsDispatchParamsSchema, md as GatewaySuspendStatusRunningResultSchema, mf as EnvironmentsCreateResultSchema, mg as TtsSpeakParamsSchema, mh as TalkClientCloseParamsSchema, mi as SystemInfoResult, ml as PushTestResultSchema, mm as ConfigSetParamsSchema, mn as PluginsListParamsSchema, mo as SessionsCompanionAskParamsSchema, mp as CronUpdateParamsSchema, mr as TerminalOpenResultSchema, ms as SessionsListParams, mt as WorkerLiveEventResult, mu as NodeRenameParams, mv as PollParamsSchema, mw as ModelsAuthLogoutParams, mx as BoardWidgetRemoveOpSchema, my as MigrationsMemoryPlanResult, n as WorktreeBranchSchema, nC as CancelledApprovalSnapshotSchema, nE as ToolsCatalogParams, nS as WorkerInferenceContext, nT as SkillsProposalEvaluateParams, n_ as AuditActivityListParams, na as SessionBranchSchema, nb as BoardCanvasDocumentSourceSchema, nc as SessionDiscussionInfoSchema, nd as GatewaySuspendPrepareReadyResultSchema, nf as ExecApprovalsNodeSnapshotSchema, ng as TalkSessionSteerParamsSchema, nh as ChannelsStatusParamsSchema, ni as TaskSuggestionsDismissParamsSchema, nl as QuestionResolvedEvent, nm as ConfigGetParamsSchema, nn as PluginCatalogInstallActionSchema, no as SessionsCompactionGetParamsSchema, np as CronListParamsSchema, nr as TerminalDataEventSchema, ns as SessionsGroupsDeleteParams, nt as WorkerHelloOk, nu as NodePendingEnqueueResult, nv as ConversationTurnCancelParamsSchema, nw as AgentsListParamsSchema, nx as BoardWidgetMcpAppContentSchema, ny as SessionsCatalogListResultSchema, o as WorktreeRepositoryStatusSchema, oC as ExecApprovalPresentationSchema, oE as ToolsEffectiveEntry, oS as WorkerInferenceEventParams, oT as SkillsProposalEventsListParams, o_ as AuditActivityOutboundMessageV1, oa as SessionCompanionExchangeSchema, ob as BoardCommand, oc as SessionDiscussionOpenResultSchema, od as GatewaySuspendResumeParamsSchema, of as ExecApprovalsSnapshotSchema, og as TalkSessionTurnParamsSchema, oh as ChannelsStopParamsSchema, oi as TaskSuggestionsListParamsSchema, ol as QuestionStatusSchema, om as ConfigSchemaLookupParamsSchema, on as PluginJsonValueSchema, oo as SessionsCompactionListParamsSchema, op as CronRunParamsSchema, or as TerminalExitEventSchema, os as SessionsGroupsListResult, ot as WorkerLiveEventErrorShape, ou as NodePluginToolsUpdateParams, ov as ConversationTurnParamsSchema, ow as AgentsUpdateParamsSchema, ox as BoardWidgetPluginContentSchema, oy as SessionsCatalogReadResultSchema, p as WorktreesGcParams, pC as PluginApprovalPresentationSchema, pE as ToolsEffectiveParamsSchema, pS as WorkerInferenceStartRequestFrameSchema, pT as SkillsProposalInspectResultSchema, p_ as ArtifactsDownloadParamsSchema, pa as SessionFileBrowserResult, pb as BoardEventParams, pc as SessionsDispatchParams, pd as GatewaySuspendStatusResultSchema, pf as EnvironmentsCreateResult, pg as TtsSpeakParams, ph as TalkClientCloseParams, pi as SystemInfoParamsSchema, pl as PushTestResult, pm as ConfigSetParams, pn as PluginsListParams, po as SessionsCompanionAskParams, pp as CronStatusParamsSchema, pr as TerminalOpenResult, ps as SessionsGroupsRenameParamsSchema, pt as WorkerLiveEventResponseFrameSchema, pu as NodePresenceAliveReasonSchema, pv as PollParams, pw as ModelChoiceSchema, px as BoardWidgetPutParamsSchema, py as MigrationsMemoryPlanParamsSchema, q as WorkerConnectRequestFrameSchema, qC as AgentsFilesListParams, qS as ApprovalResolveParams, qT as SkillsUploadChunkParamsSchema, q_ as ConversationListParams, qa as SessionsCleanupParams, qb as BoardWidgetContentSchema, qc as QuestionRequestQuestionSchema, qd as ExecApprovalResolveParams, qf as CronStatusParams, qg as AuditListParamsSchema, qh as TalkSessionCreateResult, qi as SessionVisibility, ql as NodePairRemoveParamsSchema, qm as ChannelsPairingListParamsSchema, qn as TerminalAckResult, qo as SessionsFilesRevealResultSchema, qp as SystemChangeSource, qr as TaskSuggestionsAcceptParams, qs as SessionsSendParamsSchema, qt as WizardStatusParams, qu as LogsTailParams, qv as SessionsCatalogContinueParams, qw as SkillsDetailResultSchema, qx as WORKER_INFERENCE_METHODS, qy as SessionToolOverrides, r as WorktreeRecord, rC as DeniedApprovalSnapshot, rE as ToolsCatalogParamsSchema, rS as WorkerInferenceErrorReason, rT as SkillsProposalEvaluateParamsSchema, r_ as AuditActivityListParamsSchema, ra as SessionCompactionCheckpoint, rb as BoardChangedEvent, rc as SessionDiscussionOpenParams, rd as GatewaySuspendPrepareResult, rf as ExecApprovalsSetParams, rg as TalkSessionSubmitToolResultParams, rh as ChannelsStatusResult, ri as TaskSuggestionsDismissResult, rl as QuestionResolvedEventSchema, rm as ConfigPatchParams, rn as PluginCatalogOfficialInstallSchema, ro as SessionsCompactionGetResult, rp as CronPacingSchema, rr as TerminalEvent, rs as SessionsGroupsDeleteParamsSchema, rt as WorkerLiveEvent, ru as NodePendingEnqueueResultSchema, rv as ConversationTurnCancelResult, rw as AgentsListResult, rx as BoardWidgetMcpAppPutContentSchema, ry as SessionsCatalogReadParams, s as WorktreesBranchesParams, sC as ExpiredApprovalSnapshot, sE as ToolsEffectiveEntrySchema, sS as WorkerInferenceModelRef, sT as SkillsProposalEventsListParamsSchema, s_ as AuditActivityOutboundMessageV1Schema, sa as SessionDiffFile, sb as BoardCommandEvent, sc as SessionDiscussionState, sd as GatewaySuspendResumeResult, sf as EnvironmentStatus, sg as TalkSessionTurnResult, sh as TalkAgentControlResult, si as TaskSuggestionsListResult, sl as QuestionWaitAnswerParams, sm as ConfigSchemaLookupResult, sn as PluginSearchPackageSchema, so as SessionsCompactionListResult, sp as CronRunsParamsSchema, sr as TerminalInputParams, ss as SessionsGroupsListResultSchema, st as WorkerLiveEventErrorShapeSchema, su as NodePluginToolsUpdateParamsSchema, sv as ConversationTurnReply, sw as AgentsUpdateResult, sx as BoardWidgetPluginKindSchema, sy as MAX_MEMORY_MIGRATION_ITEMS, t as WorktreeBranch, tC as CancelledApprovalSnapshot, tE as ToolCatalogProfileSchema, tS as WorkerInferenceCancelResult, tT as SkillsProposalCreateParamsSchema, t_ as AuditActivityInboundMessageV1Schema, ta as SessionBranch, tb as BoardCanvasDocumentSource, tc as SessionDiscussionInfoResultSchema, td as GatewaySuspendPrepareParamsSchema, tf as ExecApprovalsNodeSnapshot, tg as TalkSessionSteerParams, th as ChannelsStatusParams, ti as TaskSuggestionsDismissParams, tl as QuestionResolveResultSchema, tm as ConfigGetParams, tn as PluginCatalogEntrySchema, to as SessionsCompactionGetParams, tp as CronJobStateSchema, tr as TerminalDataEvent, ts as SessionsForkResultSchema, tt as WorkerHeartbeatResult, tu as NodePendingEnqueueParamsSchema, tv as ConversationTurnCancelParams, tw as AgentsListParams, tx as BoardWidgetMaterializedPutParams, ty as SessionsCatalogListResult, u as WorktreesBranchesResultSchema, uC as PendingApprovalSnapshotSchema, uE as ToolsEffectiveNotice, uS as WorkerInferenceOptionsSchema, uT as SkillsProposalInspectParams, u_ as ArtifactSummary, ua as SessionDiffFileStatusSchema, ub as BoardCronActionParamsSchema, uc as SessionPlacementProtocolSchemas, ud as GatewaySuspendStatusParamsSchema, uf as EnvironmentSummarySchema, ug as TalkSpeakParamsSchema, uh as TalkCatalogParamsSchema, ui as SYSTEM_PRESENCE_LEGACY_CLEAR_LAST_INPUT_SECONDS, ul as QuestionWaitAnswerResultSchema, um as ConfigSchemaParamsSchema, un as PluginsInstallParamsSchema, uo as SessionsCompactionRestoreParamsSchema, up as CronScratchSchema, ur as TerminalListResultSchema, us as SessionsGroupsPutParams, ut as WorkerLiveEventRequestFrame, uu as NodePresenceAlivePayload, uv as ConversationTurnResultSchema, uw as AuthProbeStatusSchema, ux as BoardWidgetPutContent, uy as MigrationProtocolSchemas, v as WorktreesListParamsSchema, vC as SessionApprovalReplay, vE as ToolsInvokeParamsSchema, vS as WorkerInferenceTerminalOutcome, vT as SkillsProposalRequestRevisionResult, v_ as ArtifactsGetResult, va as SessionFileEntrySchema, vb as BoardLegacyEventParamsSchema, vc as SessionsReclaimParamsSchema, vd as FsDirEntrySchema, vf as EnvironmentsDestroyResultSchema, vg as WebLoginStartParamsSchema, vh as TalkClientCreateResultSchema, vi as Snapshot, vl as WebPushTestParamsSchema, vm as UpdateStatusParamsSchema, vn as PluginsRefreshParamsSchema, vo as SessionsCompanionResetParamsSchema, vp as SystemAgentChatHistoryResultSchema, vr as TerminalSessionInfoSchema, vs as SessionsMessagesUnsubscribeParams, vt as WorkerTranscriptCommitErrorReason, vu as NodeSkillsUpdateParams, vv as CHAT_SEND_SESSION_KEY_MAX_LENGTH, vw as ModelsListParams, vx as McpAppViewExpiredErrorDetailsSchema, vy as SessionSuggestionEvent, w as WorktreesRemoveResultSchema, wC as TerminalSessionApprovalEventSchema, wS as validateWorkerInferenceTerminalOutcome, wT as SkillsProposalsListParams, w_ as AgentsWorkspaceEntry, wa as SessionFileRelevanceSchema, wb as BoardPromptAuthorizeParams, wc as SecretsResolveAssignmentSchema, wd as DevicePairApproveParamsSchema, wf as EnvironmentsStatusParamsSchema, wg as UsersLinkEmailParams, wh as TalkClientToolCallParamsSchema, wi as SessionMemberAddParamsSchema, wl as NodeDescribeParamsSchema, wm as COMMAND_CHOICE_LABEL_MAX_LENGTH, wn as PluginsSearchResultSchema, wo as SessionsCompanionStateResultSchema, wp as SystemAgentChatQuestionSchema, wr as TerminalUploadParamsSchema, ws as SessionsPatchParams, wt as WorkerTranscriptCommitRequestFrame, wu as ChatAttachmentsSchema, wv as SecretInputSchema, ww as ModelsProbeResult, wx as missingScopeErrorShape, wy as SessionSuggestionStateSchema, x as WorktreesRemoveParams, xC as SystemAgentApprovalPresentationSchema, xS as validateWorkerInferenceEventFrame, xT as SkillsProposalReviseParamsSchema, x_ as ArtifactsListParamsSchema, xa as SessionFilePreviewKind, xb as BoardOp, xc as SessionPlacementState, xd as FsListDirResult, xf as EnvironmentsListResult, xg as UserProfile, xh as TalkClientSteerParams, xi as StateVersionSchema, xl as WebPushVapidPublicKeyParams, xm as COMMAND_ARG_CHOICES_MAX_ITEMS, xn as PluginsSearchParams, xo as SessionsCompanionStateParams, xp as SystemAgentChatParams, xr as TerminalTextResult, xs as SessionsObserverVisibilityParamsSchema, xt as WorkerTranscriptCommitErrorShapeSchema, xu as ChatAbortParamsSchema, xv as GatewayClientModeSchema, xw as ModelsListResultSchema, xx as WizardNotFoundErrorDetailsSchema, xy as SessionSuggestionResolutionSchema, y as WorktreesListResult, yC as SessionApprovalReplaySchema, yE as ToolsInvokeResult, yS as WorkerInferenceTerminalParams, yT as SkillsProposalRequestRevisionResultSchema, y_ as ArtifactsGetResultSchema, ya as SessionFileKind, yb as BoardMcpAppDescriptor, yc as SessionsReclaimResult, yd as FsListDirParams, yf as EnvironmentsListParams, yg as WebLoginWaitParams, yh as TalkClientMutationResult, yi as SnapshotSchema, yl as WebPushUnsubscribeParams, ym as COMMAND_ALIAS_MAX_ITEMS, yn as PluginsRefreshResult, yo as SessionsCompanionResetResult, yp as SystemAgentChatHistoryTurn, yr as TerminalTextParams, ys as SessionsMessagesUnsubscribeParamsSchema, yt as WorkerTranscriptCommitErrorReasonSchema, yu as NodeSkillsUpdateParamsSchema, yv as ChatSendSessionKeyString, yw as ModelsListParamsSchema, yx as MissingScopeErrorDetailsSchema, yy as SessionSuggestionEventSchema, z as WORKER_TRANSCRIPT_MAX_JSON_DEPTH, zC as AgentsDeleteResult, zS as ApprovalHistoryParams, zT as SkillsSkillCardResultSchema, z_ as AgentIdentityParamsSchema, za as SessionsBranchesListParams, zb as BoardUpdateParamsSchema, zc as QuestionListResultSchema, zd as DeviceTokenRevokeParams, zf as CronRemoveParams, zg as UsersSetAvatarResultSchema, zh as TalkSessionCancelOutputParams, zi as SessionSharingIdentitySchema, zl as NodeListParamsSchema, zm as ChannelsPairingApproveParamsSchema, zn as PluginsUninstallParams, zo as SessionsFilesGetResultSchema, zp as SystemAgentSetupVerifyParams, zr as TasksListResult, zs as SessionsRewindResultSchema, zt as WizardNextParams, zu as ChatRunStartupPhaseSchema, zv as SessionCatalogSession, zw as SkillsCuratorActionResultSchema, zx as SkillsProposalHistoryScanResult, zy as SessionTypingParams } from "./schema-modules-DldUMfpk.mjs";
import { i as PROTOCOL_VERSION, n as MIN_NODE_PROTOCOL_VERSION, r as MIN_PROBE_PROTOCOL_VERSION, t as MIN_CLIENT_PROTOCOL_VERSION } from "./version-COV9CEyr.mjs";

//#region src/clawhub-trust-error-details.d.ts
/** Structured ClawHub trust details carried in gateway error payloads. */
declare const ClawHubTrustErrorCodes: {
  readonly SECURITY_UNAVAILABLE: "clawhub_security_unavailable";
  readonly RISK_ACKNOWLEDGEMENT_REQUIRED: "clawhub_risk_acknowledgement_required";
  readonly DOWNLOAD_BLOCKED: "clawhub_download_blocked";
};
type ClawHubTrustErrorCode = (typeof ClawHubTrustErrorCodes)[keyof typeof ClawHubTrustErrorCodes];
type ClawHubTrustErrorDetails = {
  clawhubTrustCode?: ClawHubTrustErrorCode;
  version?: string;
  warning?: string;
};
declare function isClawHubTrustErrorCode(value: unknown): value is ClawHubTrustErrorCode;
declare function buildClawHubTrustErrorDetails(params: {
  code?: ClawHubTrustErrorCode;
  version?: string;
  warning?: string;
}): ClawHubTrustErrorDetails | undefined;
declare function readClawHubTrustErrorDetails(details: unknown): ClawHubTrustErrorDetails | undefined;
//#endregion
//#region src/system-agent-error-details.d.ts
/** Structured system-agent details carried in gateway error payloads. */
declare const SystemAgentErrorDetailCodes: {
  readonly INFERENCE_UNAVAILABLE: "system_agent_inference_unavailable";
  readonly SESSION_INVALIDATED: "system_agent_session_invalidated";
};
type SystemAgentInferenceUnavailableErrorDetails = {
  code: typeof SystemAgentErrorDetailCodes.INFERENCE_UNAVAILABLE;
};
type SystemAgentSessionInvalidatedErrorDetails = {
  code: typeof SystemAgentErrorDetailCodes.SESSION_INVALIDATED;
};
declare function buildSystemAgentInferenceUnavailableErrorDetails(): SystemAgentInferenceUnavailableErrorDetails;
declare function buildSystemAgentSessionInvalidatedErrorDetails(): SystemAgentSessionInvalidatedErrorDetails;
declare function readSystemAgentInferenceUnavailableErrorDetails(details: unknown): SystemAgentInferenceUnavailableErrorDetails | undefined;
declare function readSystemAgentSessionInvalidatedErrorDetails(details: unknown): SystemAgentSessionInvalidatedErrorDetails | undefined;
//#endregion
//#region src/session-icon.d.ts
type SessionIcon = {
  kind: "named";
  name: string;
} | {
  kind: "emoji";
  emoji: string;
} | {
  kind: "svg";
  svg: string;
};
declare const SESSION_AGENT_ATTENTION_ICON_IDS: readonly ["hand", "key", "alert", "flag", "lock", "hourglass"];
type SessionAgentAttentionIconId = (typeof SESSION_AGENT_ATTENTION_ICON_IDS)[number];
type SessionAgentStatus = {
  note: string;
  expiresAt: number;
  attention?: SessionAgentAttentionIconId;
};
type SessionIconNormalizationResult = {
  ok: true;
  value: string;
} | {
  ok: false;
  reason: string;
};
/** Parse a stored session icon form without sanitizing SVG markup. */
declare function parseSessionIcon(value: string): SessionIcon | null;
/** Validate and canonicalize a session icon before it enters durable state. */
declare function normalizeSessionIconInput(value: string): SessionIconNormalizationResult;
//#endregion
//#region src/terminal-validators.d.ts
declare const validateTerminalOpenParams: ProtocolValidator<{
  agentId?: string | undefined;
  catalog?: {
    threadId: string;
    hostId: string;
    catalogId: string;
  } | undefined;
  cols: number;
  rows: number;
}>;
declare const validateTerminalInputParams: ProtocolValidator<{
  data: string;
  sessionId: string;
}>;
declare const validateTerminalResizeParams: ProtocolValidator<{
  sessionId: string;
  cols: number;
  rows: number;
}>;
declare const validateTerminalCloseParams: ProtocolValidator<{
  sessionId: string;
}>;
declare const validateTerminalAttachParams: ProtocolValidator<{
  sessionId: string;
}>;
declare const validateTerminalTextParams: ProtocolValidator<{
  sessionId: string;
}>;
declare const validateTerminalUploadParams: ProtocolValidator<{
  name: string;
  sessionId: string;
  contentBase64: string;
}>;
declare const validateTerminalUploadResult: ProtocolValidator<{
  path: string;
  size: number;
}>;
//#endregion
//#region src/approval-result-validators.d.ts
declare const validateApprovalGetResult: ProtocolValidator<{
  approval: {
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    expiresAtMs: number;
    status: "pending";
    createdAtMs: number;
    urlPath: string;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "user";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    decision: "allow-once" | "allow-always";
    expiresAtMs: number;
    status: "allowed";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "user" | "malformed-verdict" | "no-route" | "storage-corrupt";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    decision: "deny";
    expiresAtMs: number;
    status: "denied";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "timeout";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    expiresAtMs: number;
    status: "expired";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "run-aborted" | "gateway-restart";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    expiresAtMs: number;
    status: "cancelled";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  };
}>;
declare const validateApprovalHistoryResult: ProtocolValidator<{
  nextCursor?: string | undefined;
  items: ({
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "user";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    decision: "allow-once" | "allow-always";
    expiresAtMs: number;
    status: "allowed";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "user" | "malformed-verdict" | "no-route" | "storage-corrupt";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    decision: "deny";
    expiresAtMs: number;
    status: "denied";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "timeout";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    expiresAtMs: number;
    status: "expired";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "run-aborted" | "gateway-restart";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    expiresAtMs: number;
    status: "cancelled";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  })[];
}>;
declare const validateApprovalResolveResult: ProtocolValidator<{
  applied: boolean;
  approval: {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "user";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    decision: "allow-once" | "allow-always";
    expiresAtMs: number;
    status: "allowed";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "user" | "malformed-verdict" | "no-route" | "storage-corrupt";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    decision: "deny";
    expiresAtMs: number;
    status: "denied";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "timeout";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    expiresAtMs: number;
    status: "expired";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  } | {
    source?: {
      agentId?: string | undefined;
      sessionKey?: string | undefined;
    } | undefined;
    resolver?: {
      id?: string | undefined;
      kind: "device" | "channel" | "runtime" | "system";
    } | undefined;
    reason: "run-aborted" | "gateway-restart";
    id: string;
    presentation: {
      host?: string | null | undefined;
      agentId?: string | null | undefined;
      nodeId?: string | null | undefined;
      commandPreview?: string | null | undefined;
      warningText?: string | null | undefined;
      kind: "exec";
      commandText: string;
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      detail?: string | undefined;
      agentId?: string | null | undefined;
      pluginId?: string | null | undefined;
      toolName?: string | null | undefined;
      kind: "plugin";
      description: string;
      title: string;
      severity: "info" | "warning" | "critical";
      allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
    } | {
      agentId?: string | null | undefined;
      kind: "system-agent";
      description: string;
      title: string;
      allowedDecisions: ["allow-once", "deny"];
      proposalHash: string;
    };
    expiresAtMs: number;
    status: "cancelled";
    createdAtMs: number;
    urlPath: string;
    resolvedAtMs: number;
  };
}>;
//#endregion
//#region src/migration-api.d.ts
declare const validateMigrationsMemoryPlanParams: ProtocolValidator<{
  overwrite?: boolean | undefined;
  agentId: string;
}>;
declare const validateMigrationsMemoryApplyParams: ProtocolValidator<{
  overwrite?: boolean | undefined;
  agentId: string;
  providerId: string;
  idempotencyKey: string;
  planFingerprint: string;
  itemIds: string[];
}>;
//#endregion
//#region src/validator-registry.d.ts
declare const validateCommandsListParams: ProtocolValidator<{
  agentId?: string | undefined;
  scope?: "text" | "native" | "both" | undefined;
  provider?: string | undefined;
  includeArgs?: boolean | undefined;
}>;
declare const validateConnectParams: ProtocolValidator<{
  caps?: string[] | undefined;
  commands?: string[] | undefined;
  permissions?: Record<string, boolean> | undefined;
  pathEnv?: string | undefined;
  role?: string | undefined;
  scopes?: string[] | undefined;
  device?: {
    id: string;
    publicKey: string;
    signature: string;
    signedAt: number;
    nonce: string;
  } | undefined;
  auth?: {
    token?: string | undefined;
    bootstrapToken?: string | undefined;
    deviceToken?: string | undefined;
    password?: string | undefined;
    approvalRuntimeToken?: string | undefined;
    agentRuntimeIdentityToken?: string | undefined;
  } | undefined;
  locale?: string | undefined;
  userAgent?: string | undefined;
  minProtocol: number;
  maxProtocol: number;
  client: {
    displayName?: string | undefined;
    deviceFamily?: string | undefined;
    modelIdentifier?: string | undefined;
    instanceId?: string | undefined;
    id: "webchat-ui" | "openclaw-control-ui" | "openclaw-browser-copilot" | "openclaw-tui" | "webchat" | "cli" | "gateway-client" | "openclaw-macos" | "openclaw-linux" | "openclaw-ios" | "openclaw-watchos" | "openclaw-android" | "node-host" | "openclaw-worker" | "test" | "fingerprint" | "openclaw-probe";
    version: string;
    platform: string;
    mode: "webchat" | "cli" | "test" | "ui" | "backend" | "node" | "worker" | "probe";
  };
}>;
declare const validateWorkerAdmissionHandshake: ProtocolValidator<{
  bundleHash: string;
  openclawVersion: string;
  protocolFeatures: string[];
}>;
declare const validateWorkerConnectRequestFrame: ProtocolValidator<{
  type: "req";
  id: string;
  method: "connect";
  params: {
    minProtocol: number;
    maxProtocol: number;
    client: {
      id: "openclaw-worker";
      version: string;
      platform: string;
      mode: "worker";
    };
    role: "worker";
    admission: {
      runId: null;
      environmentId: string;
      sessionId: null;
      credential: string;
      ownerEpoch: number;
      rpcSetVersion: number;
      handshake: {
        bundleHash: string;
        openclawVersion: string;
        protocolFeatures: string[];
      };
    } | {
      runId: string;
      environmentId: string;
      sessionId: string;
      credential: string;
      ownerEpoch: number;
      rpcSetVersion: number;
      handshake: {
        bundleHash: string;
        openclawVersion: string;
        protocolFeatures: string[];
      };
    };
  };
}>;
declare const validateWorkerHeartbeatParams: ProtocolValidator<{
  status: "busy" | "ready" | "draining";
  sentAtMs: number;
}>;
declare const validateWorkerTranscriptCommitParams: ProtocolValidator<{
  seq: number;
  messages: ({
    role: "user";
    content: ({
      textSignature?: string | undefined;
      type: "text";
      text: string;
    } | {
      type: "image";
      data: string;
      mimeType: string;
    })[];
    timestamp: number;
  } | {
    diagnostics?: {
      error?: {
        name?: string | undefined;
        code?: string | number | undefined;
        stack?: string | undefined;
        message: string;
      } | undefined;
      details?: Record<string, unknown> | undefined;
      type: string;
      timestamp: number;
    }[] | undefined;
    errorCode?: string | undefined;
    errorMessage?: string | undefined;
    errorType?: string | undefined;
    errorBody?: string | undefined;
    responseModel?: string | undefined;
    responseId?: string | undefined;
    role: "assistant";
    model: string;
    content: ({
      textSignature?: string | undefined;
      type: "text";
      text: string;
    } | {
      redacted?: boolean | undefined;
      thinkingSignature?: string | undefined;
      type: "thinking";
      thinking: string;
    } | {
      executionMode?: "sequential" | "parallel" | undefined;
      thoughtSignature?: string | undefined;
      type: "toolCall";
      id: string;
      name: string;
      arguments: Record<string, unknown>;
    })[];
    timestamp: number;
    provider: string;
    usage: {
      contextUsage?: {
        state: "available";
        totalTokens: number;
        promptTokens: number;
      } | {
        state: "unavailable";
      } | undefined;
      totalTokens: number;
      input: number;
      output: number;
      cacheRead: number;
      cacheWrite: number;
      cost: {
        totalOrigin?: "provider-billed" | undefined;
        total: number;
        input: number;
        output: number;
        cacheRead: number;
        cacheWrite: number;
      };
    };
    stopReason: "error" | "aborted" | "length" | "stop" | "toolUse";
    api: string;
  } | {
    details?: unknown;
    role: "toolResult";
    toolName: string;
    toolCallId: string;
    content: ({
      textSignature?: string | undefined;
      type: "text";
      text: string;
    } | {
      type: "image";
      data: string;
      mimeType: string;
    })[];
    timestamp: number;
    isError: boolean;
  })[];
  runEpoch: number;
  baseLeafId: string | null;
}>;
declare const validateWorkerLiveEventParams: ProtocolValidator<{
  readonly event: {
    readonly kind: "assistant";
    readonly payload: {
      readonly mediaUrls?: string[] | undefined;
      readonly phase?: "commentary" | "final_answer" | undefined;
      readonly itemId?: string | undefined;
      readonly replace?: true | undefined;
      readonly text: string;
      readonly delta: string;
    };
  } | {
    readonly kind: "thinking";
    readonly payload: {
      readonly text: string;
      readonly delta: string;
    };
  } | {
    readonly kind: "tool";
    readonly payload: {
      readonly hideFromChannelProgress?: true | undefined;
      readonly name: string;
      readonly toolCallId: string;
      readonly phase: "start";
      readonly args: unknown;
    } | {
      readonly hideFromChannelProgress?: true | undefined;
      readonly name: string;
      readonly toolCallId: string;
      readonly phase: "update";
      readonly partialResult: unknown;
    } | {
      readonly hideFromChannelProgress?: true | undefined;
      readonly meta?: string | undefined;
      readonly toolErrorSummary?: string | undefined;
      readonly name: string;
      readonly toolCallId: string;
      readonly result: unknown;
      readonly phase: "result";
      readonly isError: boolean;
    };
  } | {
    readonly kind: "approval";
    readonly payload: {
      readonly reason?: string | undefined;
      readonly host?: string | undefined;
      readonly scope?: "session" | "turn" | undefined;
      readonly message?: string | undefined;
      readonly toolCallId?: string | undefined;
      readonly command?: string | undefined;
      readonly itemId?: string | undefined;
      readonly approvalId?: string | undefined;
      readonly approvalSlug?: string | undefined;
      readonly kind: "plugin" | "unknown" | "exec";
      readonly title: string;
      readonly status: "unavailable" | "pending";
      readonly phase: "requested";
    } | {
      readonly reason?: string | undefined;
      readonly host?: string | undefined;
      readonly scope?: "session" | "turn" | undefined;
      readonly message?: string | undefined;
      readonly toolCallId?: string | undefined;
      readonly command?: string | undefined;
      readonly itemId?: string | undefined;
      readonly approvalId?: string | undefined;
      readonly approvalSlug?: string | undefined;
      readonly kind: "plugin" | "unknown" | "exec";
      readonly title: string;
      readonly status: "failed" | "denied" | "approved";
      readonly phase: "resolved";
    };
  } | {
    readonly kind: "lifecycle";
    readonly payload: {
      readonly phase: "start";
      readonly startedAt: number;
    } | {
      readonly phase: "fallback";
      readonly activeProvider: string;
      readonly attemptSummaries: string[];
      readonly attempts: {
        readonly reason?: "auth" | "rate_limit" | "billing" | "timeout" | "format" | "unknown" | "auth_permanent" | "overloaded" | "server_error" | "context_overflow" | "model_not_found" | "session_expired" | "empty_response" | "no_error_details" | "unclassified" | undefined;
        readonly authMode?: string | undefined;
        readonly code?: string | undefined;
        readonly status?: number | undefined;
        readonly error: string;
        readonly model: string;
        readonly provider: string;
      }[];
      readonly reasonSummary: string;
      readonly selectedProvider: string;
      readonly selectedModel: string;
      readonly activeModel: string;
    } | {
      readonly previousActiveModel?: string | undefined;
      readonly phase: "fallback_cleared";
      readonly activeProvider: string;
      readonly selectedProvider: string;
      readonly selectedModel: string;
      readonly activeModel: string;
    } | {
      readonly fallbackStepToModel?: string | undefined;
      readonly fallbackStepFromFailureReason?: "auth" | "rate_limit" | "billing" | "timeout" | "format" | "unknown" | "auth_permanent" | "overloaded" | "server_error" | "context_overflow" | "model_not_found" | "session_expired" | "empty_response" | "no_error_details" | "unclassified" | undefined;
      readonly fallbackStepFromFailureDetail?: string | undefined;
      readonly fallbackStepChainPosition?: number | undefined;
      readonly phase: "fallback_step";
      readonly fallbackStepType: "fallback_step";
      readonly fallbackStepFinalOutcome: "succeeded" | "next_fallback" | "chain_exhausted";
      readonly fallbackStepFromModel: string;
    } | {
      readonly error?: string | undefined;
      readonly startedAt?: number | undefined;
      readonly aborted?: boolean | undefined;
      readonly stopReason?: string | undefined;
      readonly yielded?: true | undefined;
      readonly toolErrorSummary?: string | undefined;
      readonly timeoutPhase?: "queue" | "provider" | "preflight" | "post_turn" | "gateway_draining" | undefined;
      readonly providerStarted?: boolean | undefined;
      readonly livenessState?: "blocked" | "working" | "paused" | "abandoned" | undefined;
      readonly replayInvalid?: true | undefined;
      readonly phase: "finishing";
      readonly endedAt: number;
    } | {
      readonly startedAt?: number | undefined;
      readonly aborted?: boolean | undefined;
      readonly stopReason?: string | undefined;
      readonly yielded?: true | undefined;
      readonly toolErrorSummary?: string | undefined;
      readonly timeoutPhase?: "queue" | "provider" | "preflight" | "post_turn" | "gateway_draining" | undefined;
      readonly providerStarted?: boolean | undefined;
      readonly livenessState?: "blocked" | "working" | "paused" | "abandoned" | undefined;
      readonly replayInvalid?: true | undefined;
      readonly phase: "end";
      readonly endedAt: number;
    } | {
      readonly startedAt?: number | undefined;
      readonly aborted?: boolean | undefined;
      readonly stopReason?: string | undefined;
      readonly yielded?: true | undefined;
      readonly toolErrorSummary?: string | undefined;
      readonly timeoutPhase?: "queue" | "provider" | "preflight" | "post_turn" | "gateway_draining" | undefined;
      readonly providerStarted?: boolean | undefined;
      readonly livenessState?: "blocked" | "working" | "paused" | "abandoned" | undefined;
      readonly replayInvalid?: true | undefined;
      readonly fallbackExhaustedFailure?: true | undefined;
      readonly error: string;
      readonly phase: "error";
      readonly endedAt: number;
    };
  };
  readonly seq: number;
  readonly runId: string;
  readonly runEpoch: number;
  readonly lastAckedSeq: number;
}>;
declare const validateGatewaySuspendPrepareParams: ProtocolValidator<{
  requestId: string;
}>;
declare const validateGatewaySuspendStatusParams: ProtocolValidator<{
  suspensionId: string;
}>;
declare const validateGatewaySuspendResumeParams: ProtocolValidator<{
  suspensionId: string;
}>;
declare const validateRequestFrame: ProtocolValidator<{
  params?: unknown;
  traceparent?: string | undefined;
  type: "req";
  id: string;
  method: string;
}>;
declare const validateMessageActionParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  accountId?: string | undefined;
  requesterAccountId?: string | undefined;
  requesterSenderId?: string | undefined;
  senderIsOwner?: boolean | undefined;
  sessionId?: string | undefined;
  inboundTurnKind?: string | undefined;
  toolContext?: {
    currentChannelId?: string | undefined;
    currentMessagingTarget?: string | undefined;
    currentGraphChannelId?: string | undefined;
    currentChannelProvider?: string | undefined;
    currentThreadTs?: string | undefined;
    currentMessageId?: string | number | undefined;
    replyToMode?: "off" | "first" | "all" | "batched" | undefined;
    hasRepliedRef?: {
      value: boolean;
    } | undefined;
    sameChannelThreadRequired?: boolean | undefined;
    skipCrossContextDecoration?: boolean | undefined;
  } | undefined;
  conversationReadOrigin?: "direct-operator" | undefined;
  channel: string;
  params: Record<string, unknown>;
  action: string;
  idempotencyKey: string;
}>;
declare const validateSendParams: ProtocolValidator<{
  agentId?: string | undefined;
  channel?: string | undefined;
  message?: string | undefined;
  sessionKey?: string | undefined;
  accountId?: string | undefined;
  threadId?: string | undefined;
  replyToId?: string | undefined;
  mediaUrl?: string | undefined;
  mediaUrls?: string[] | undefined;
  buffer?: string | undefined;
  filename?: string | undefined;
  contentType?: string | undefined;
  asVoice?: boolean | undefined;
  gifPlayback?: boolean | undefined;
  forceDocument?: boolean | undefined;
  silent?: boolean | undefined;
  parseMode?: "HTML" | undefined;
  idempotencyKey: string;
  to: string;
}>;
declare const validateConversationListParams: ProtocolValidator<{
  channel?: string | undefined;
  query?: string | undefined;
  limit?: number | undefined;
  agentId: string;
}>;
declare const validateConversationSendParams: ProtocolValidator<{
  sourceSessionKey?: string | undefined;
  agentId: string;
  message: string;
  operationId: string;
  conversationRef: string;
}>;
declare const validateConversationTurnCancelParams: ProtocolValidator<{
  agentId: string;
  turnId: string;
}>;
declare const validateConversationTurnParams: ProtocolValidator<{
  sourceSessionKey?: string | undefined;
  agentId: string;
  message: string;
  conversationRef: string;
  turnId: string;
  timeoutMs: number;
}>;
declare const validatePollParams: ProtocolValidator<{
  channel?: string | undefined;
  accountId?: string | undefined;
  threadId?: string | undefined;
  silent?: boolean | undefined;
  maxSelections?: number | undefined;
  durationSeconds?: number | undefined;
  durationHours?: number | undefined;
  isAnonymous?: boolean | undefined;
  idempotencyKey: string;
  to: string;
  question: string;
  options: string[];
}>;
declare const validateAgentParams: ProtocolValidator<{
  agentId?: string | undefined;
  model?: string | undefined;
  channel?: string | undefined;
  label?: string | undefined;
  sessionKey?: string | undefined;
  timeout?: number | undefined;
  accountId?: string | undefined;
  threadId?: string | undefined;
  sessionId?: string | undefined;
  to?: string | undefined;
  provider?: string | undefined;
  replyTo?: string | undefined;
  expectedExistingSessionId?: string | undefined;
  thinking?: string | undefined;
  deliver?: boolean | undefined;
  attachments?: unknown[] | undefined;
  replyChannel?: string | undefined;
  replyAccountId?: string | undefined;
  groupId?: string | undefined;
  groupChannel?: string | undefined;
  groupSpace?: string | undefined;
  bestEffortDeliver?: boolean | undefined;
  lane?: string | undefined;
  cwd?: string | undefined;
  cleanupBundleMcpOnRunEnd?: boolean | undefined;
  modelRun?: boolean | undefined;
  promptMode?: "none" | "full" | "minimal" | undefined;
  extraSystemPrompt?: string | undefined;
  bootstrapContextMode?: "full" | "lightweight" | undefined;
  bootstrapContextRunKind?: "default" | "heartbeat" | "cron" | undefined;
  acpTurnSource?: "manual_spawn" | undefined;
  internalRuntimeHandoffId?: string | undefined;
  execApprovalFollowupExpectedSessionId?: string | undefined;
  internalEvents?: {
    mediaUrls?: string[] | undefined;
    attachments?: {
      type?: string | undefined;
      name?: string | undefined;
      durationMs?: number | undefined;
      path?: string | undefined;
      mediaUrl?: string | undefined;
      url?: string | undefined;
      filePath?: string | undefined;
      mimeType?: string | undefined;
      sizeBytes?: number | undefined;
      width?: number | undefined;
      height?: number | undefined;
    }[] | undefined;
    childSessionId?: string | undefined;
    statsLine?: string | undefined;
    type: "task_completion";
    source: string;
    status: string;
    childSessionKey: string;
    announceType: string;
    taskLabel: string;
    statusLabel: string;
    result: string;
    replyInstruction: string;
  }[] | undefined;
  inputProvenance?: {
    sourceSessionKey?: string | undefined;
    originSessionId?: string | undefined;
    sourceChannel?: string | undefined;
    sourceTool?: string | undefined;
    kind: string;
  } | undefined;
  suppressPromptPersistence?: boolean | undefined;
  sessionEffects?: "visible" | "internal" | undefined;
  sourceReplyDeliveryMode?: "automatic" | "message_tool_only" | undefined;
  disableMessageTool?: boolean | undefined;
  swarmCollector?: boolean | undefined;
  swarmOutputSchema?: Record<string, unknown> | undefined;
  forceRestartSafeTools?: boolean | undefined;
  voiceWakeTrigger?: string | undefined;
  message: string;
  idempotencyKey: string;
}>;
declare const validateAuditActivityListParams: ProtocolValidator<AuditActivityListParams>;
declare const validateAuditListParams: ProtocolValidator<{
  kind?: "agent_run" | "tool_action" | undefined;
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  after?: number | undefined;
  status?: "failed" | "unknown" | "cancelled" | "started" | "succeeded" | "timed_out" | "blocked" | undefined;
  runId?: string | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
  before?: number | undefined;
}>;
declare const validateUsersListParams: ProtocolValidator<object>;
declare const validateUsersSelfParams: ProtocolValidator<object>;
declare const validateUsersSelfResult: ProtocolValidator<{
  profile: {
    id: string;
    displayName: string | null;
    updatedAt: number;
    createdAt: number;
    avatarMime: "image/png" | "image/jpeg" | "image/webp" | null;
    mergedInto: string | null;
    emails: string[];
    hasAvatar: boolean;
  };
}>;
declare const validateUsersLinkEmailParams: ProtocolValidator<{
  email: string;
  targetProfileId: string;
}>;
declare const validateUsersLinkEmailResult: ProtocolValidator<{
  profile: {
    id: string;
    displayName: string | null;
    updatedAt: number;
    createdAt: number;
    avatarMime: "image/png" | "image/jpeg" | "image/webp" | null;
    mergedInto: string | null;
    emails: string[];
    hasAvatar: boolean;
  };
}>;
declare const validateUsersSetDisplayNameParams: ProtocolValidator<{
  displayName: string | null;
  profileId: string;
}>;
declare const validateUsersSetDisplayNameResult: ProtocolValidator<{
  profile: {
    id: string;
    displayName: string | null;
    updatedAt: number;
    createdAt: number;
    avatarMime: "image/png" | "image/jpeg" | "image/webp" | null;
    mergedInto: string | null;
    emails: string[];
    hasAvatar: boolean;
  };
}>;
declare const validateUsersSetAvatarParams: ProtocolValidator<{
  profileId: string;
  mime: "image/png" | "image/jpeg" | "image/webp";
  avatarBase64: string;
}>;
declare const validateUsersSetAvatarResult: ProtocolValidator<{
  profile: {
    id: string;
    displayName: string | null;
    updatedAt: number;
    createdAt: number;
    avatarMime: "image/png" | "image/jpeg" | "image/webp" | null;
    mergedInto: string | null;
    emails: string[];
    hasAvatar: boolean;
  };
}>;
declare const validateAgentIdentityParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
}>;
declare const validateAgentWaitParams: ProtocolValidator<{
  timeoutMs?: number | undefined;
  runId: string;
}>;
declare const validateWakeParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  mode: "now" | "next-heartbeat";
  text: string;
}>;
declare const validateAgentsListParams: ProtocolValidator<object>;
declare const validateWorktreesListParams: ProtocolValidator<object>;
declare const validateBoardGetParams: ProtocolValidator<{
  sessionKey: string;
}>;
declare const validateBoardUpdateParams: ProtocolValidator<{
  sessionKey: string;
  ops: ({
    chatDock?: "left" | "right" | "bottom" | "hidden" | undefined;
    kind: "tab_create";
    tabId: string;
    title: string;
  } | {
    title?: string | undefined;
    position?: number | undefined;
    chatDock?: "left" | "right" | "bottom" | "hidden" | undefined;
    kind: "tab_update";
    tabId: string;
  } | {
    kind: "tab_delete";
    tabId: string;
  } | {
    kind: "tabs_reorder";
    tabIds: string[];
  } | {
    tabId?: string | undefined;
    position?: number | undefined;
    after?: string | undefined;
    name: string;
    kind: "widget_move";
  } | {
    heightMode?: "auto" | "fixed" | undefined;
    name: string;
    kind: "widget_resize";
    sizeW: number;
    sizeH: number;
  } | {
    name: string;
    kind: "widget_remove";
  })[];
}>;
declare const validateBoardWidgetContent: ProtocolValidator<{
  kind: "html";
  html: string;
} | {
  kind: "mcp-app";
  descriptor: {
    serverName: string;
    toolName: string;
    uiResourceUri: string;
    toolCallId: string;
  };
} | {
  props?: Record<string, unknown> | undefined;
  kind: "plugin";
  pluginKind: string;
}>;
declare const validateBoardWidgetAppViewParams: ProtocolValidator<{
  instanceId: string;
  name: string;
  revision: number;
  sessionKey: string;
}>;
declare const validateBoardWidgetPutParams: ProtocolValidator<{
  title?: string | undefined;
  presentation?: "card" | "full-bleed" | "frameless" | undefined;
  heightMode?: "auto" | "fixed" | undefined;
  declared?: {
    netOrigins?: string[] | undefined;
    tools?: string[] | undefined;
  } | undefined;
  placement?: {
    tabId?: string | undefined;
    after?: string | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
  } | undefined;
  name: string;
  sessionKey: string;
  content: {
    kind: "html";
    html: string;
  } | {
    props?: Record<string, unknown> | undefined;
    kind: "plugin";
    pluginKind: string;
  } | {
    kind: "mcp-app";
    viewId: string;
  } | {
    kind: "canvas-doc";
    docId: string;
  };
}>;
declare const validateBoardWidgetGrantParams: ProtocolValidator<{
  instanceId: string;
  name: string;
  revision: number;
  sessionKey: string;
  decision: "granted" | "rejected";
}>;
declare const validateBoardEventParams: ProtocolValidator<{
  payload: unknown;
  sessionKey: string;
  widget: string;
} | {
  payload: unknown;
  ticket: string;
}>;
declare const validateBoardPromptAuthorizeParams: ProtocolValidator<{
  ticket: string;
}>;
declare const validateBoardDataReadParams: ProtocolValidator<{
  params?: Record<string, unknown> | undefined;
  ticket: string;
  bindingId: string;
}>;
declare const validateBoardActionParams: ProtocolValidator<{
  ticket: string;
  action: "cron.trigger";
  jobId: string;
} | {
  params?: Record<string, unknown> | undefined;
  ticket: string;
  action: string;
}>;
declare const validateWorktreesCreateParams: ProtocolValidator<{
  name?: string | undefined;
  baseRef?: string | undefined;
  repoRoot: string;
}>;
declare const validateWorktreesRemoveParams: ProtocolValidator<{
  force?: boolean | undefined;
  id: string;
}>;
declare const validateWorktreesRestoreParams: ProtocolValidator<{
  id: string;
}>;
declare const validateWorktreesGcParams: ProtocolValidator<object>;
declare const validateWorktreesBranchesParams: ProtocolValidator<{
  includeRepositoryStatus?: boolean | undefined;
  repoRoot: string;
}>;
declare const validateFsListDirParams: ProtocolValidator<{
  path?: string | undefined;
  nodeId?: string | undefined;
}>;
declare const validateFsListDirResult: ProtocolValidator<{
  parent?: string | undefined;
  path: string;
  home: string;
  entries: {
    hidden?: boolean | undefined;
    name: string;
    path: string;
  }[];
}>;
declare const validateAgentsCreateParams: ProtocolValidator<{
  model?: string | undefined;
  avatar?: string | undefined;
  emoji?: string | undefined;
  workspace?: string | undefined;
  name: string;
}>;
declare const validateAgentsUpdateParams: ProtocolValidator<{
  name?: string | undefined;
  model?: string | null | undefined;
  avatar?: string | undefined;
  emoji?: string | undefined;
  workspace?: string | undefined;
  agentId: string;
}>;
declare const validateAgentsDeleteParams: ProtocolValidator<{
  deleteFiles?: boolean | undefined;
  agentId: string;
}>;
declare const validateAgentsFilesListParams: ProtocolValidator<{
  agentId: string;
}>;
declare const validateAgentsFilesGetParams: ProtocolValidator<{
  name: string;
  agentId: string;
}>;
declare const validateAgentsFilesSetParams: ProtocolValidator<{
  name: string;
  agentId: string;
  content: string;
}>;
declare const validateAgentsWorkspaceListParams: ProtocolValidator<{
  path?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  agentId: string;
}>;
declare const validateAgentsWorkspaceGetParams: ProtocolValidator<{
  agentId: string;
  path: string;
}>;
declare const validateArtifactsListParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  taskId?: string | undefined;
  runId?: string | undefined;
}>;
declare const validateArtifactsGetParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  taskId?: string | undefined;
  runId?: string | undefined;
  artifactId: string;
}>;
declare const validateArtifactsDownloadParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  taskId?: string | undefined;
  runId?: string | undefined;
  artifactId: string;
}>;
declare const validateNodePairListParams: ProtocolValidator<object>;
declare const validateNodePairApproveParams: ProtocolValidator<{
  requestId: string;
}>;
declare const validateNodePairRejectParams: ProtocolValidator<{
  requestId: string;
}>;
declare const validateNodePairRemoveParams: ProtocolValidator<{
  nodeId: string;
}>;
declare const validateNodeRenameParams: ProtocolValidator<{
  displayName: string;
  nodeId: string;
}>;
declare const validateNodeListParams: ProtocolValidator<object>;
declare const validateNodePluginToolsUpdateParams: ProtocolValidator<{
  tools: {
    command?: string | undefined;
    parameters?: Record<string, unknown> | undefined;
    mcp?: {
      server: string;
      tool: string;
    } | undefined;
    name: string;
    pluginId: string;
    description: string;
  }[];
}>;
declare const validateNodeSkillsUpdateParams: ProtocolValidator<{
  skills: {
    name: string;
    description: string;
    content: string;
  }[];
}>;
declare const validateEnvironmentsCreateParams: ProtocolValidator<{
  profileId: string;
  idempotencyKey: string;
}>;
declare const validateEnvironmentsDestroyParams: ProtocolValidator<{
  force?: boolean | undefined;
  environmentId: string;
}>;
declare const validateEnvironmentsListParams: ProtocolValidator<object>;
declare const validateEnvironmentsStatusParams: ProtocolValidator<{
  environmentId: string;
}>;
declare const validateSystemInfoParams: ProtocolValidator<object>;
declare const validateSystemInfoResult: ProtocolValidator<{
  lanAddress?: string | undefined;
  port?: number | undefined;
  processInstanceId?: string | undefined;
  cpuModel?: string | undefined;
  loadAverage?: [number, number, number] | undefined;
  diskTotalBytes?: number | undefined;
  diskAvailableBytes?: number | undefined;
  diskPath?: string | undefined;
  defaultAgentUtilityModel?: {
    model: string;
    status: "auto";
  } | {
    model: string;
    status: "configured";
  } | {
    status: "disabled";
  } | {
    status: "unavailable";
  } | undefined;
  platform: string;
  uptimeMs: number;
  machineName: string;
  hostname: string;
  release: string;
  arch: string;
  osLabel: string;
  nodeVersion: string;
  pid: number;
  cpuCount: number;
  memoryTotalBytes: number;
  memoryFreeBytes: number;
}>;
declare const validateNodePendingAckParams: ProtocolValidator<{
  ids: string[];
}>;
declare const validateNodeDescribeParams: ProtocolValidator<{
  nodeId: string;
}>;
declare const validateNodeInvokeParams: ProtocolValidator<{
  params?: unknown;
  sessionKey?: string | undefined;
  timeoutMs?: number | undefined;
  turnSourceChannel?: string | undefined;
  turnSourceTo?: string | undefined;
  turnSourceAccountId?: string | undefined;
  turnSourceThreadId?: string | number | undefined;
  command: string;
  idempotencyKey: string;
  nodeId: string;
}>;
declare const validateNodeInvokeResultParams: ProtocolValidator<{
  error?: {
    code?: string | undefined;
    message?: string | undefined;
  } | undefined;
  payload?: unknown;
  payloadJSON?: string | undefined;
  id: string;
  ok: boolean;
  nodeId: string;
}>;
declare const validateNodeInvokeProgressParams: ProtocolValidator<{
  seq: number;
  nodeId: string;
  invokeId: string;
  chunk: string;
}>;
declare const validateNodeEventParams: ProtocolValidator<{
  payload?: unknown;
  payloadJSON?: string | undefined;
  event: string;
}>;
declare const validateNodePresenceActivityPayload: ProtocolValidator<{
  saturated?: boolean | undefined;
  idleSeconds: number;
} | {
  action: "clear";
}>;
declare const validateNodePendingDrainParams: ProtocolValidator<{
  maxItems?: number | undefined;
}>;
declare const validateNodePendingEnqueueParams: ProtocolValidator<{
  priority?: string | undefined;
  expiresInMs?: number | undefined;
  wake?: boolean | undefined;
  type: string;
  nodeId: string;
}>;
declare const validatePushTestParams: ProtocolValidator<{
  title?: string | undefined;
  body?: string | undefined;
  environment?: string | undefined;
  nodeId: string;
}>;
declare const validateWebPushVapidPublicKeyParams: ProtocolValidator<WebPushVapidPublicKeyParams>;
declare const validateWebPushSubscribeParams: ProtocolValidator<WebPushSubscribeParams>;
declare const validateWebPushUnsubscribeParams: ProtocolValidator<WebPushUnsubscribeParams>;
declare const validateWebPushTestParams: ProtocolValidator<WebPushTestParams>;
declare const validateSecretsResolveParams: ProtocolValidator<{
  allowedPaths?: string[] | undefined;
  forcedActivePaths?: string[] | undefined;
  optionalActivePaths?: string[] | undefined;
  providerOverrides?: {
    webSearch?: string | undefined;
    webFetch?: string | undefined;
  } | undefined;
  commandName: string;
  targetIds: string[];
}>;
declare const validateSecretsResolveResult: ProtocolValidator<{
  ok?: boolean | undefined;
  assignments?: {
    path?: string | undefined;
    value: unknown;
    pathSegments: string[];
  }[] | undefined;
  diagnostics?: string[] | undefined;
  inactiveRefPaths?: string[] | undefined;
}>;
declare const validateSessionsListParams: ProtocolValidator<{
  agentId?: string | undefined;
  label?: string | undefined;
  spawnedBy?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  activeMinutes?: number | undefined;
  requireLastInteraction?: boolean | undefined;
  sortBy?: "updatedAt" | "lastInteractionAt" | undefined;
  includeGlobal?: boolean | undefined;
  includeUnknown?: boolean | undefined;
  configuredAgentsOnly?: boolean | undefined;
  includeDerivedTitles?: boolean | undefined;
  includeLastMessage?: boolean | undefined;
  boardFace?: "chat" | "dashboard" | undefined;
  creatorId?: string | undefined;
  search?: string | undefined;
  archived?: boolean | "all" | undefined;
}>;
declare const validateSessionsCatalogListParams: ProtocolValidator<{
  agentId?: string | undefined;
  search?: string | undefined;
  catalogId?: string | undefined;
  cursors?: Record<string, string> | undefined;
  progressId?: string | undefined;
  limitPerHost?: number | undefined;
  hostIds?: string[] | undefined;
}>;
declare const validateSessionsCatalogReadParams: ProtocolValidator<{
  limit?: number | undefined;
  cursor?: string | undefined;
  threadId: string;
  hostId: string;
  catalogId: string;
}>;
declare const validateSessionsCatalogContinueParams: ProtocolValidator<{
  threadId: string;
  hostId: string;
  catalogId: string;
}>;
declare const validateSessionsCatalogArchiveParams: ProtocolValidator<{
  threadId: string;
  hostId: string;
  catalogId: string;
  confirmNoOtherRunner: true;
}>;
declare const validateSessionsSearchParams: ProtocolValidator<{
  agentId?: string | undefined;
  limit?: number | undefined;
  sessionKeys?: string[] | undefined;
  query: string;
}>;
declare const validateSessionsCleanupParams: ProtocolValidator<{
  agent?: string | undefined;
  allAgents?: boolean | undefined;
  enforce?: boolean | undefined;
  activeKey?: string | undefined;
  fixMissing?: boolean | undefined;
  fixDmScope?: boolean | undefined;
}>;
declare const validateSessionsPreviewParams: ProtocolValidator<{
  limit?: number | undefined;
  maxChars?: number | undefined;
  keys: string[];
}>;
declare const validateSessionsDescribeParams: ProtocolValidator<{
  includeDerivedTitles?: boolean | undefined;
  includeLastMessage?: boolean | undefined;
  key: string;
}>;
declare const validateSessionsResolveParams: ProtocolValidator<{
  agentId?: string | undefined;
  key?: string | undefined;
  label?: string | undefined;
  spawnedBy?: string | undefined;
  sessionId?: string | undefined;
  includeGlobal?: boolean | undefined;
  includeUnknown?: boolean | undefined;
  allowMissing?: boolean | undefined;
}>;
declare const validateSessionsFilesListParams: ProtocolValidator<{
  agentId?: string | undefined;
  path?: string | undefined;
  search?: string | undefined;
  sessionKey: string;
}>;
declare const validateSessionsFilesGetParams: ProtocolValidator<{
  agentId?: string | undefined;
  path: string;
  sessionKey: string;
}>;
declare const validateSessionsFilesSetParams: ProtocolValidator<{
  agentId?: string | undefined;
  path: string;
  sessionKey: string;
  content: string;
  expectedHash: string;
}>;
declare const validateSessionsFilesRevealParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
}>;
declare const validateSessionsDiffParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
}>;
declare const validateSessionsCompanionAskParams: ProtocolValidator<{
  sessionKey: string;
  question: string;
}>;
declare const validateSessionsCompanionStateParams: ProtocolValidator<{
  sessionKey: string;
}>;
declare const validateSessionsCompanionResetParams: ProtocolValidator<{
  sessionKey: string;
}>;
declare const validateSessionsObserverVisibilityParams: ProtocolValidator<{
  visible: boolean;
}>;
declare const validateSessionVisibilitySetParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
  visibility: "shared" | "read-only" | "suggest" | "draft";
}>;
declare const validateSessionMembersListParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
}>;
declare const validateSessionMemberAddParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
  identityId: string;
}>;
declare const validateSessionMemberRemoveParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
  identityId: string;
}>;
declare const validateSessionSuggestionsAddParams: ProtocolValidator<{
  agentId?: string | undefined;
  text: string;
  sessionKey: string;
}>;
declare const validateSessionSuggestionsListParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
}>;
declare const validateSessionSuggestionsResolveParams: ProtocolValidator<{
  agentId?: string | undefined;
  id: string;
  sessionKey: string;
  resolution: "queue" | "send" | "edit" | "dismiss";
}>;
declare const validateSessionTypingParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
  sessionId: string;
  typing: boolean;
}>;
declare const validateSessionsCreateParams: ProtocolValidator<{
  agentId?: string | undefined;
  model?: string | undefined;
  key?: string | undefined;
  label?: string | undefined;
  message?: string | undefined;
  task?: string | undefined;
  attachments?: {
    type?: string | undefined;
    durationMs?: number | undefined;
    content?: unknown;
    mimeType?: string | undefined;
    sizeBytes?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    fileName?: string | undefined;
  }[] | undefined;
  cwd?: string | undefined;
  catalogId?: string | undefined;
  incognito?: boolean | undefined;
  parentSessionKey?: string | undefined;
  spawnDepth?: number | undefined;
  worktree?: boolean | undefined;
  execNode?: string | undefined;
  visibility?: "shared" | "read-only" | "suggest" | "draft" | undefined;
  thinkingLevel?: string | undefined;
  fork?: boolean | undefined;
  emitCommandHooks?: boolean | undefined;
  succeedsParent?: boolean | undefined;
  worktreeBaseRef?: string | undefined;
  worktreeName?: string | undefined;
}>;
declare const validateSessionsSendParams: ProtocolValidator<{
  agentId?: string | undefined;
  idempotencyKey?: string | undefined;
  timeoutMs?: number | undefined;
  thinking?: string | undefined;
  attachments?: {
    type?: string | undefined;
    durationMs?: number | undefined;
    content?: unknown;
    mimeType?: string | undefined;
    sizeBytes?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    fileName?: string | undefined;
  }[] | undefined;
  key: string;
  message: string;
}>;
declare const validateSessionsDispatchParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
  profileId: string;
}>;
declare const validateSessionsReclaimParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
}>;
declare const validateSessionsMessagesSubscribeParams: ProtocolValidator<{
  agentId?: string | undefined;
  includeApprovals?: true | undefined;
  key: string;
}>;
declare const validateSessionsMessagesUnsubscribeParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
}>;
declare const validateSessionsViewerPresenceSetParams: ProtocolValidator<{
  sessionKeys: string[];
}>;
declare const validateSessionsAbortParams: ProtocolValidator<{
  agentId?: string | undefined;
  key?: string | undefined;
  runId?: string | undefined;
  clearQueued?: boolean | undefined;
}>;
declare const validateSessionsPatchParams: ProtocolValidator<{
  agentId?: string | undefined;
  model?: string | null | undefined;
  label?: string | null | undefined;
  icon?: string | null | undefined;
  boardFace?: "chat" | "dashboard" | undefined;
  archived?: boolean | undefined;
  pinned?: boolean | undefined;
  unread?: boolean | undefined;
  execNode?: string | null | undefined;
  toolOverrides?: {
    skills?: Record<string, boolean> | undefined;
    webSearch?: boolean | undefined;
    mcpServers?: Record<string, boolean> | undefined;
    mcpToolsDeny?: Record<string, string[]> | undefined;
  } | null | undefined;
  thinkingLevel?: string | null | undefined;
  expectedSessionId?: string | undefined;
  expectedLifecycleRevision?: string | undefined;
  category?: string | null | undefined;
  statusNote?: string | null | undefined;
  attention?: string | null | undefined;
  ttlMinutes?: number | undefined;
  fastMode?: boolean | "auto" | null | undefined;
  verboseLevel?: string | null | undefined;
  traceLevel?: string | null | undefined;
  reasoningLevel?: string | null | undefined;
  responseUsage?: "full" | "off" | "tokens" | "on" | null | undefined;
  elevatedLevel?: string | null | undefined;
  execHost?: string | null | undefined;
  execSecurity?: string | null | undefined;
  execAsk?: string | null | undefined;
  completionOwnerSessionKey?: string | null | undefined;
  inheritedToolPolicyVersion?: 1 | null | undefined;
  inheritedToolAllow?: string[] | null | undefined;
  inheritedToolDeny?: string[] | null | undefined;
  sendPolicy?: "allow" | "deny" | null | undefined;
  groupActivation?: "mention" | "always" | null | undefined;
  key: string;
}>;
declare const validateSessionsPluginPatchParams: ProtocolValidator<{
  value?: unknown;
  unset?: boolean | undefined;
  key: string;
  pluginId: string;
  namespace: string;
}>;
declare const validateSessionsResetParams: ProtocolValidator<{
  reason?: "new" | "reset" | undefined;
  agentId?: string | undefined;
  key: string;
}>;
declare const validateSessionsDeleteParams: ProtocolValidator<{
  agentId?: string | undefined;
  expectedSessionId?: string | undefined;
  expectedLifecycleRevision?: string | undefined;
  deleteTranscript?: boolean | undefined;
  expectedSessionUpdatedAt?: number | undefined;
  emitLifecycleHooks?: boolean | undefined;
  archivedOnly?: boolean | undefined;
  key: string;
}>;
declare const validateSessionsGroupsListParams: ProtocolValidator<object>;
declare const validateSessionsGroupsListResult: ProtocolValidator<{
  sectionOrder?: string[] | undefined;
  groups: {
    name: string;
    position: number;
  }[];
}>;
declare const validateSessionsGroupsPutParams: ProtocolValidator<{
  sectionOrder?: string[] | undefined;
  names: string[];
}>;
declare const validateSessionsGroupsRenameParams: ProtocolValidator<{
  name: string;
  to: string;
}>;
declare const validateSessionsGroupsDeleteParams: ProtocolValidator<{
  name: string;
}>;
declare const validateSessionsGroupsMutationResult: ProtocolValidator<{
  sectionOrder?: string[] | undefined;
  updatedSessions?: number | undefined;
  ok: true;
  groups: {
    name: string;
    position: number;
  }[];
}>;
declare const validateSessionsCompactParams: ProtocolValidator<{
  agentId?: string | undefined;
  maxLines?: number | undefined;
  key: string;
}>;
declare const validateSessionsCompactionListParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
}>;
declare const validateSessionsCompactionGetParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
  checkpointId: string;
}>;
declare const validateSessionsCompactionBranchParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
  checkpointId: string;
}>;
declare const validateSessionsCompactionRestoreParams: ProtocolValidator<{
  agentId?: string | undefined;
  key: string;
  checkpointId: string;
}>;
declare const validateSessionsBranchesListParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
}>;
declare const validateSessionsBranchesSwitchParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
  leafEntryId: string;
}>;
declare const validateSessionsRewindParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
  entryId: string;
}>;
declare const validateSessionsForkParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
  entryId: string;
}>;
declare const validateSessionsUsageParams: ProtocolValidator<{
  mode?: "gateway" | "utc" | "specific" | undefined;
  agentId?: string | undefined;
  key?: string | undefined;
  limit?: number | undefined;
  agentScope?: "all" | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
  range?: "all" | "7d" | "30d" | "90d" | "1y" | undefined;
  groupBy?: "instance" | "family" | undefined;
  includeHistorical?: boolean | undefined;
  utcOffset?: string | undefined;
  timeZone?: string | undefined;
  includeContextWeight?: boolean | undefined;
}>;
declare const validateSessionDiscussionInfoParams: ProtocolValidator<{
  sessionKey: string;
}>;
declare const validateSessionDiscussionInfoResult: ProtocolValidator<{
  embedUrl?: string | undefined;
  openUrl?: string | undefined;
  state: "none" | "open" | "available";
}>;
declare const validateSessionDiscussionOpenParams: ProtocolValidator<{
  sessionKey: string;
}>;
declare const validateSessionDiscussionOpenResult: ProtocolValidator<{
  embedUrl?: string | undefined;
  openUrl?: string | undefined;
  state: "none" | "open" | "available";
}>;
declare const validateTaskSuggestionsListParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
}>;
declare const validateTaskSuggestionsCreateParams: ProtocolValidator<{
  agentId?: string | undefined;
  prompt: string;
  title: string;
  sessionKey: string;
  cwd: string;
  tldr: string;
}>;
declare const validateTaskSuggestionsAcceptParams: ProtocolValidator<{
  taskId: string;
}>;
declare const validateTaskSuggestionsDismissParams: ProtocolValidator<{
  reason?: string | undefined;
  taskId: string;
}>;
declare const validateTasksListParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  status?: "failed" | "running" | "queued" | "cancelled" | "completed" | "timed_out" | ("failed" | "running" | "queued" | "cancelled" | "completed" | "timed_out")[] | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
}>;
declare const validateTasksGetParams: ProtocolValidator<{
  taskId: string;
}>;
declare const validateTasksCancelParams: ProtocolValidator<{
  reason?: string | undefined;
  taskId: string;
}>;
declare const validateConfigGetParams: ProtocolValidator<object>;
declare const validateConfigSetParams: ProtocolValidator<{
  baseHash?: string | undefined;
  raw: string;
}>;
declare const validateConfigApplyParams: ProtocolValidator<{
  readonly sessionKey?: string | undefined;
  readonly baseHash?: string | undefined;
  readonly deliveryContext?: {
    channel?: string | undefined;
    accountId?: string | undefined;
    threadId?: string | number | undefined;
    to?: string | undefined;
  } | undefined;
  readonly note?: string | undefined;
  readonly restartDelayMs?: number | undefined;
  readonly raw: string;
}>;
declare const validateConfigPatchParams: ProtocolValidator<{
  sessionKey?: string | undefined;
  baseHash?: string | undefined;
  deliveryContext?: {
    channel?: string | undefined;
    accountId?: string | undefined;
    threadId?: string | number | undefined;
    to?: string | undefined;
  } | undefined;
  note?: string | undefined;
  restartDelayMs?: number | undefined;
  replacePaths?: string[] | undefined;
  raw: string;
}>;
declare const validateConfigSchemaParams: ProtocolValidator<object>;
declare const validateConfigSchemaLookupParams: ProtocolValidator<{
  path: string;
}>;
declare const validateConfigSchemaLookupResult: ProtocolValidator<{
  reloadKind?: "none" | "restart" | "hot" | undefined;
  hint?: {
    tags?: string[] | undefined;
    label?: string | undefined;
    group?: string | undefined;
    order?: number | undefined;
    presentation?: "phone-number" | undefined;
    help?: string | undefined;
    docsUrl?: string | undefined;
    advanced?: boolean | undefined;
    sensitive?: boolean | undefined;
    placeholder?: string | undefined;
    itemTemplate?: unknown;
  } | undefined;
  hintPath?: string | undefined;
  path: string;
  children: {
    type?: string | string[] | undefined;
    reloadKind?: "none" | "restart" | "hot" | undefined;
    hint?: {
      tags?: string[] | undefined;
      label?: string | undefined;
      group?: string | undefined;
      order?: number | undefined;
      presentation?: "phone-number" | undefined;
      help?: string | undefined;
      docsUrl?: string | undefined;
      advanced?: boolean | undefined;
      sensitive?: boolean | undefined;
      placeholder?: string | undefined;
      itemTemplate?: unknown;
    } | undefined;
    hintPath?: string | undefined;
    required: boolean;
    path: string;
    key: string;
    hasChildren: boolean;
  }[];
  schema: unknown;
}>;
declare const validateSystemAgentChatParams: ProtocolValidator<{
  message?: string | undefined;
  reset?: boolean | undefined;
  welcomeVariant?: "onboarding" | "new-agent" | undefined;
  context?: {
    page: string;
  } | undefined;
  delegation?: {
    agentId?: string | undefined;
    sessionKey?: string | undefined;
    turnSourceChannel?: string | undefined;
    turnSourceTo?: string | undefined;
    turnSourceAccountId?: string | undefined;
    turnSourceThreadId?: string | number | undefined;
  } | undefined;
  sessionId: string;
}>;
declare const validateSystemAgentChatHistoryParams: ProtocolValidator<{
  limit?: number | undefined;
}>;
declare const validateSystemChangesListParams: ProtocolValidator<{
  limit?: number | undefined;
  beforeCursor?: string | undefined;
}>;
declare const validateSystemAgentSetupDetectParams: ProtocolValidator<object>;
declare const validateSystemAgentSetupVerifyParams: ProtocolValidator<object>;
declare const validateSystemAgentSetupActivateParams: ProtocolValidator<{
  modelRef?: string | undefined;
  workspace?: string | undefined;
  authChoice?: string | undefined;
  apiKey?: string | undefined;
  kind: "existing-model" | "openai-api-key" | "anthropic-api-key" | "claude-cli" | "codex-cli" | "gemini-cli" | "api-key" | `provider-auto:${string}`;
}>;
declare const validateSystemAgentSetupAuthStartParams: ProtocolValidator<{
  workspace?: string | undefined;
  sessionId: string;
  authChoice: string;
}>;
declare const validateWizardStartParams: ProtocolValidator<{
  mode?: "local" | "remote" | undefined;
  channel?: string | undefined;
  workspace?: string | undefined;
  installDaemon?: boolean | undefined;
  flow?: "channels" | "setup" | undefined;
}>;
declare const validateWizardNextParams: ProtocolValidator<{
  answer?: {
    value?: unknown;
    stepId: string;
  } | undefined;
  sessionId: string;
}>;
declare const validateWizardCancelParams: ProtocolValidator<{
  sessionId: string;
}>;
declare const validateWizardStatusParams: ProtocolValidator<{
  sessionId: string;
}>;
declare const validateTalkModeParams: ProtocolValidator<{
  phase?: string | undefined;
  enabled: boolean;
}>;
declare const validateTalkCatalogParams: ProtocolValidator<object>;
declare const validateTalkConfigParams: ProtocolValidator<{
  includeSecrets?: boolean | undefined;
}>;
declare const validateTalkConfigResult: ProtocolValidator<{
  config: {
    ui?: {
      seamColor?: string | undefined;
    } | undefined;
    session?: {
      mainKey?: string | undefined;
    } | undefined;
    talk?: {
      provider?: string | undefined;
      resolved?: {
        provider: string;
        config: {
          apiKey?: string | {
            id: string;
            source: "env";
            provider: string;
          } | {
            id: string;
            source: "file";
            provider: string;
          } | {
            id: string;
            source: "exec";
            provider: string;
          } | undefined;
        };
      } | undefined;
      realtime?: {
        mode?: "realtime" | "stt-tts" | "transcription" | undefined;
        model?: string | undefined;
        provider?: string | undefined;
        transport?: "webrtc" | "provider-websocket" | "gateway-relay" | "managed-room" | undefined;
        brain?: "none" | "agent-consult" | "direct-tools" | undefined;
        providers?: Record<string, {
          apiKey?: string | {
            id: string;
            source: "env";
            provider: string;
          } | {
            id: string;
            source: "file";
            provider: string;
          } | {
            id: string;
            source: "exec";
            provider: string;
          } | undefined;
        }> | undefined;
        voice?: string | undefined;
        vadThreshold?: number | undefined;
        silenceDurationMs?: number | undefined;
        prefixPaddingMs?: number | undefined;
        reasoningEffort?: string | undefined;
        speakerVoice?: string | undefined;
        speakerVoiceId?: string | undefined;
        instructions?: string | undefined;
        consultRouting?: "provider-direct" | "force-agent-consult" | undefined;
      } | undefined;
      providers?: Record<string, {
        apiKey?: string | {
          id: string;
          source: "env";
          provider: string;
        } | {
          id: string;
          source: "file";
          provider: string;
        } | {
          id: string;
          source: "exec";
          provider: string;
        } | undefined;
      }> | undefined;
      consultThinkingLevel?: string | undefined;
      consultFastMode?: boolean | undefined;
      speechLocale?: string | undefined;
      interruptOnSpeech?: boolean | undefined;
      silenceTimeoutMs?: number | undefined;
    } | undefined;
  };
}>;
declare const validateTalkClientCreateParams: ProtocolValidator<{
  mode?: "realtime" | "stt-tts" | "transcription" | undefined;
  capabilities?: ("camera-frame" | "voice-transcript")[] | undefined;
  model?: string | undefined;
  sessionKey?: string | undefined;
  provider?: string | undefined;
  transport?: "webrtc" | "provider-websocket" | "gateway-relay" | "managed-room" | undefined;
  brain?: "none" | "agent-consult" | "direct-tools" | undefined;
  voiceSessionId?: string | undefined;
  voice?: string | undefined;
  vadThreshold?: number | undefined;
  silenceDurationMs?: number | undefined;
  prefixPaddingMs?: number | undefined;
  reasoningEffort?: string | undefined;
}>;
declare const validateTalkClientCreateResult: ProtocolValidator<{
  model?: string | undefined;
  voice?: string | undefined;
  offerUrl?: string | undefined;
  offerHeaders?: Record<string, string> | undefined;
  expiresAt?: number | undefined;
  provider: string;
  transport: "webrtc";
  voiceSessionId: string;
  clientSecret: string;
} | {
  model?: string | undefined;
  voice?: string | undefined;
  expiresAt?: number | undefined;
  initialMessage?: unknown;
  protocol: string;
  provider: string;
  audio: {
    inputEncoding: "pcm16" | "g711_ulaw";
    inputSampleRateHz: number;
    outputEncoding: "pcm16" | "g711_ulaw";
    outputSampleRateHz: number;
  };
  transport: "provider-websocket";
  voiceSessionId: string;
  clientSecret: string;
  websocketUrl: string;
} | {
  model?: string | undefined;
  voiceSessionId?: string | undefined;
  voice?: string | undefined;
  expiresAt?: number | undefined;
  provider: string;
  audio: {
    inputEncoding: "pcm16" | "g711_ulaw";
    inputSampleRateHz: number;
    outputEncoding: "pcm16" | "g711_ulaw";
    outputSampleRateHz: number;
  };
  transport: "gateway-relay";
  relaySessionId: string;
} | {
  token?: string | undefined;
  model?: string | undefined;
  voiceSessionId?: string | undefined;
  voice?: string | undefined;
  expiresAt?: number | undefined;
  provider: string;
  transport: "managed-room";
  roomUrl: string;
}>;
declare const validateTalkClientCloseParams: ProtocolValidator<{
  sessionKey: string;
  voiceSessionId: string;
}>;
declare const validateTalkClientMutationResult: ProtocolValidator<{
  ok: true;
}>;
declare const validateTalkClientToolCallParams: ProtocolValidator<{
  voiceSessionId?: string | undefined;
  relaySessionId?: string | undefined;
  args?: unknown;
  name: string;
  sessionKey: string;
  callId: string;
}>;
declare const validateTalkClientToolCallResult: ProtocolValidator<{
  runId: string;
  idempotencyKey: string;
}>;
declare const validateTalkClientTranscriptParams: ProtocolValidator<{
  timestamp?: number | undefined;
  role: "user" | "assistant";
  text: string;
  sessionKey: string;
  entryId: string;
  voiceSessionId: string;
}>;
declare const validateTalkClientSteerParams: ProtocolValidator<{
  mode?: "status" | "steer" | "cancel" | "followup" | undefined;
  text: string;
  sessionKey: string;
}>;
declare const validateTalkSessionCreateParams: ProtocolValidator<{
  mode?: "realtime" | "stt-tts" | "transcription" | undefined;
  model?: string | undefined;
  sessionKey?: string | undefined;
  spawnedBy?: string | undefined;
  provider?: string | undefined;
  transport?: "webrtc" | "provider-websocket" | "gateway-relay" | "managed-room" | undefined;
  brain?: "none" | "agent-consult" | "direct-tools" | undefined;
  voice?: string | undefined;
  vadThreshold?: number | undefined;
  silenceDurationMs?: number | undefined;
  prefixPaddingMs?: number | undefined;
  reasoningEffort?: string | undefined;
  language?: string | undefined;
  ttlMs?: number | undefined;
}>;
declare const validateTalkSessionJoinParams: ProtocolValidator<{
  token: string;
  sessionId: string;
}>;
declare const validateTalkSessionAppendAudioParams: ProtocolValidator<{
  timestamp?: number | undefined;
  sessionId: string;
  audioBase64: string;
}>;
declare const validateTalkSessionAcknowledgeMarkParams: ProtocolValidator<{
  sessionId: string;
  markName: string;
}>;
declare const validateTalkSessionTurnParams: ProtocolValidator<{
  turnId?: string | undefined;
  sessionId: string;
}>;
declare const validateTalkSessionCancelTurnParams: ProtocolValidator<{
  reason?: string | undefined;
  turnId?: string | undefined;
  sessionId: string;
}>;
declare const validateTalkSessionCancelOutputParams: ProtocolValidator<{
  reason?: string | undefined;
  turnId?: string | undefined;
  sessionId: string;
}>;
declare const validateTalkSessionSteerParams: ProtocolValidator<{
  mode?: "status" | "steer" | "cancel" | "followup" | undefined;
  sessionKey?: string | undefined;
  text: string;
  sessionId: string;
}>;
declare const validateTalkSessionSubmitToolResultParams: ProtocolValidator<{
  options?: {
    suppressResponse?: boolean | undefined;
    willContinue?: boolean | undefined;
  } | undefined;
  sessionId: string;
  result: unknown;
  callId: string;
}>;
declare const validateTalkSessionCloseParams: ProtocolValidator<{
  sessionId: string;
}>;
declare const validateTalkSpeakParams: ProtocolValidator<{
  language?: string | undefined;
  voiceId?: string | undefined;
  modelId?: string | undefined;
  outputFormat?: string | undefined;
  speed?: number | undefined;
  rateWpm?: number | undefined;
  stability?: number | undefined;
  similarity?: number | undefined;
  style?: number | undefined;
  speakerBoost?: boolean | undefined;
  seed?: number | undefined;
  normalize?: string | undefined;
  latencyTier?: number | undefined;
  text: string;
}>;
declare const validateTtsSpeakParams: ProtocolValidator<{
  text: string;
}>;
declare const validateChannelsStatusParams: ProtocolValidator<{
  probe?: boolean | undefined;
  channel?: string | undefined;
  timeoutMs?: number | undefined;
}>;
declare const validateChannelsPairingListParams: ProtocolValidator<{
  channel?: string | undefined;
  accountId?: string | undefined;
}>;
declare const validateChannelsPairingApproveParams: ProtocolValidator<{
  notify?: boolean | undefined;
  bootstrapCommandOwner?: boolean | undefined;
  channel: string;
  requestId: string;
  accountId: string;
}>;
declare const validateChannelsPairingDismissParams: ProtocolValidator<{
  channel: string;
  requestId: string;
  accountId: string;
}>;
declare const validateChannelsStartParams: ProtocolValidator<{
  accountId?: string | undefined;
  channel: string;
}>;
declare const validateChannelsStopParams: ProtocolValidator<{
  accountId?: string | undefined;
  channel: string;
}>;
declare const validateChannelsLogoutParams: ProtocolValidator<{
  accountId?: string | undefined;
  channel: string;
}>;
declare const validateModelsAuthLogoutParams: ProtocolValidator<{
  agentId?: string | undefined;
  profileIds?: string[] | undefined;
  provider: string;
}>;
declare const validateModelsAuthStatusParams: ProtocolValidator<{
  refresh?: boolean | undefined;
  agentId?: string | undefined;
}>;
declare const validateModelsListParams: ProtocolValidator<{
  includeProviderCapabilities?: boolean | undefined;
  view?: "default" | "configured" | "all" | "provider-config" | undefined;
}>;
declare const validateSkillsStatusParams: ProtocolValidator<{
  agentId?: string | undefined;
}>;
declare const validateToolsCatalogParams: ProtocolValidator<{
  agentId?: string | undefined;
  includePlugins?: boolean | undefined;
}>;
declare const validateToolsEffectiveParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey: string;
}>;
declare const validateToolsInvokeParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  idempotencyKey?: string | undefined;
  conversationReadOrigin?: "direct-operator" | undefined;
  confirm?: boolean | undefined;
  args?: Record<string, unknown> | undefined;
  name: string;
}>;
declare const validateSkillsBinsParams: ProtocolValidator<object>;
declare const validateSkillsInstallParams: ProtocolValidator<{
  agentId?: string | undefined;
  timeoutMs?: number | undefined;
  dangerouslyForceUnsafeInstall?: boolean | undefined;
  name: string;
  installId: string;
} | {
  version?: string | undefined;
  agentId?: string | undefined;
  force?: boolean | undefined;
  timeoutMs?: number | undefined;
  acknowledgeClawHubRisk?: boolean | undefined;
  source: "clawhub";
  slug: string;
} | {
  agentId?: string | undefined;
  force?: boolean | undefined;
  timeoutMs?: number | undefined;
  sha256?: string | undefined;
  source: "upload";
  slug: string;
  uploadId: string;
}>;
declare const validateSkillsUploadBeginParams: ProtocolValidator<{
  idempotencyKey?: string | undefined;
  force?: boolean | undefined;
  sha256?: string | undefined;
  kind: "skill-archive";
  sizeBytes: number;
  slug: string;
}>;
declare const validateSkillsUploadChunkParams: ProtocolValidator<{
  offset: number;
  uploadId: string;
  dataBase64: string;
}>;
declare const validateSkillsUploadCommitParams: ProtocolValidator<{
  sha256?: string | undefined;
  uploadId: string;
}>;
declare const validateSkillsUpdateParams: ProtocolValidator<{
  enabled?: boolean | undefined;
  apiKey?: string | undefined;
  env?: Record<string, string> | undefined;
  skillKey: string;
} | {
  agentId?: string | undefined;
  all?: boolean | undefined;
  slug?: string | undefined;
  acknowledgeClawHubRisk?: boolean | undefined;
  source: "clawhub";
}>;
declare const validateSkillsSearchParams: ProtocolValidator<{
  query?: string | undefined;
  limit?: number | undefined;
}>;
declare const validateSkillsDetailParams: ProtocolValidator<{
  slug: string;
}>;
declare const validateSkillsCuratorStatusParams: ProtocolValidator<object>;
declare const validateSkillsCuratorActionParams: ProtocolValidator<{
  skill: string;
}>;
declare const validateSkillsProposalsListParams: ProtocolValidator<{
  agentId?: string | undefined;
}>;
declare const validateSkillsProposalInspectParams: ProtocolValidator<{
  agentId?: string | undefined;
  proposalId: string;
}>;
declare const validateSkillsProposalCreateParams: ProtocolValidator<{
  agentId?: string | undefined;
  supportFiles?: {
    path: string;
    content: string;
  }[] | undefined;
  evidence?: string | undefined;
  goal?: string | undefined;
  name: string;
  description: string;
  content: string;
}>;
declare const validateSkillsProposalUpdateParams: ProtocolValidator<{
  agentId?: string | undefined;
  description?: string | undefined;
  supportFiles?: {
    path: string;
    content: string;
  }[] | undefined;
  evidence?: string | undefined;
  goal?: string | undefined;
  content: string;
  skillName: string;
}>;
declare const validateSkillsProposalReviseParams: ProtocolValidator<{
  agentId?: string | undefined;
  description?: string | undefined;
  content?: string | undefined;
  expectedRevisionHash?: string | undefined;
  correlationId?: string | undefined;
  supportFiles?: {
    path: string;
    content: string;
  }[] | undefined;
  evidence?: string | undefined;
  goal?: string | undefined;
  proposalId: string;
}>;
declare const validateSkillsProposalRequestRevisionParams: ProtocolValidator<{
  agentId?: string | undefined;
  sessionId?: string | undefined;
  expectedRevisionHash?: string | undefined;
  targetAgentId?: string | undefined;
  sessionKey: string;
  idempotencyKey: string;
  proposalId: string;
  instructions: string;
}>;
declare const validateSkillsProposalActionParams: ProtocolValidator<{
  reason?: string | undefined;
  agentId?: string | undefined;
  expectedRevisionHash?: string | undefined;
  correlationId?: string | undefined;
  proposalId: string;
}>;
declare const validateSkillsProposalEvaluateParams: ProtocolValidator<{
  agentId?: string | undefined;
  expectedRevisionHash?: string | undefined;
  correlationId?: string | undefined;
  proposalId: string;
}>;
declare const validateSkillsProposalEventsListParams: ProtocolValidator<{
  agentId?: string | undefined;
  limit?: number | undefined;
  proposalId?: string | undefined;
  afterSequence?: number | undefined;
}>;
declare const validateSkillsSecurityVerdictsParams: ProtocolValidator<{
  agentId?: string | undefined;
}>;
declare const validateSkillsSkillCardParams: ProtocolValidator<{
  agentId?: string | undefined;
  skillKey: string;
}>;
declare const validateCronListParams: ProtocolValidator<{
  agentId?: string | undefined;
  enabled?: "disabled" | "enabled" | "all" | undefined;
  query?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  sortBy?: "name" | "updatedAtMs" | "nextRunAtMs" | undefined;
  compact?: boolean | undefined;
  lastRunStatus?: "ok" | "error" | "unknown" | "all" | "skipped" | undefined;
  includeDisabled?: boolean | undefined;
  scheduleKind?: "every" | "cron" | "stream" | "all" | "at" | "on-exit" | undefined;
  sortDir?: "asc" | "desc" | undefined;
  includeDeliveryPreviews?: boolean | undefined;
}>;
declare const validateCronStatusParams: ProtocolValidator<object>;
declare const validateCronGetParams: ProtocolValidator<{
  id: string;
} | {
  jobId: string;
}>;
declare const validateCronAddParams: ProtocolValidator<{
  displayName?: string | undefined;
  owner?: {
    agentId?: string | undefined;
    sessionKey?: string | undefined;
    accountId?: string | undefined;
  } | undefined;
  agentId?: string | null | undefined;
  enabled?: boolean | undefined;
  description?: string | undefined;
  sessionKey?: string | null | undefined;
  trigger?: {
    once?: boolean | undefined;
    script: string;
  } | undefined;
  declarationKey?: string | undefined;
  deleteAfterRun?: boolean | undefined;
  pacing?: {
    min?: string | undefined;
    max?: string | undefined;
  } | undefined;
  delivery?: {
    channel?: string | undefined;
    accountId?: string | undefined;
    threadId?: string | number | undefined;
    to?: string | undefined;
    bestEffort?: boolean | undefined;
    failureDestination?: {
      mode?: "announce" | "webhook" | undefined;
      channel?: string | undefined;
      accountId?: string | undefined;
      to?: string | undefined;
    } | undefined;
    mode: "none";
  } | {
    channel?: string | undefined;
    accountId?: string | undefined;
    threadId?: string | number | undefined;
    to?: string | undefined;
    bestEffort?: boolean | undefined;
    failureDestination?: {
      mode?: "announce" | "webhook" | undefined;
      channel?: string | undefined;
      accountId?: string | undefined;
      to?: string | undefined;
    } | undefined;
    completionDestination?: {
      mode: "webhook";
      to: string;
    } | undefined;
    mode: "announce";
  } | {
    channel?: string | undefined;
    accountId?: string | undefined;
    threadId?: string | number | undefined;
    bestEffort?: boolean | undefined;
    failureDestination?: {
      mode?: "announce" | "webhook" | undefined;
      channel?: string | undefined;
      accountId?: string | undefined;
      to?: string | undefined;
    } | undefined;
    mode: "webhook";
    to: string;
  } | undefined;
  failureAlert?: false | {
    mode?: "announce" | "webhook" | undefined;
    channel?: string | undefined;
    after?: number | undefined;
    accountId?: string | undefined;
    to?: string | undefined;
    cooldownMs?: number | undefined;
    includeSkipped?: boolean | undefined;
  } | undefined;
  name: string;
  payload: {
    toolsAllow?: string[] | undefined;
    toolsAllowIsDefault?: boolean | undefined;
    text: string;
    kind: "systemEvent";
  } | {
    model?: unknown;
    thinking?: unknown;
    fallbacks?: unknown;
    toolsAllow?: unknown;
    toolsAllowIsDefault?: boolean | undefined;
    timeoutSeconds?: number | undefined;
    allowUnsafeExternalContent?: boolean | undefined;
    lightContext?: boolean | undefined;
    kind: "agentTurn";
    message: unknown;
  } | {
    cwd?: string | undefined;
    env?: Record<string, string> | undefined;
    input?: string | undefined;
    toolsAllow?: unknown;
    toolsAllowIsDefault?: boolean | undefined;
    timeoutSeconds?: number | undefined;
    noOutputTimeoutSeconds?: number | undefined;
    outputMaxBytes?: number | undefined;
    kind: "command";
    argv: unknown;
  } | {
    toolsAllow?: unknown;
    toolsAllowIsDefault?: boolean | undefined;
    timeoutSeconds?: number | undefined;
    toolBudget?: number | undefined;
    kind: "script";
    script: unknown;
  };
  schedule: {
    kind: "at";
    at: string;
  } | {
    anchorMs?: number | undefined;
    kind: "every";
    everyMs: number;
  } | {
    tz?: string | undefined;
    staggerMs?: number | undefined;
    kind: "cron";
    expr: string;
  } | {
    cwd?: string | undefined;
    kind: "on-exit";
    command: string;
  } | {
    mode?: "line" | "match" | undefined;
    cwd?: string | undefined;
    match?: string | undefined;
    batchMs?: number | undefined;
    maxBatchBytes?: number | undefined;
    kind: "stream";
    command: string[];
  };
  sessionTarget: string;
  wakeMode: "now" | "next-heartbeat";
}>;
declare const validateCronUpdateParams: ProtocolValidator<{
  id: string;
} | {
  jobId: string;
}>;
declare const validateCronRemoveParams: ProtocolValidator<{
  id: string;
} | {
  jobId: string;
}>;
declare const validateCronRunParams: ProtocolValidator<{
  id: string;
} | {
  jobId: string;
}>;
declare const validateCronRunsParams: ProtocolValidator<{
  id?: string | undefined;
  agentId?: string | undefined;
  scope?: "all" | "job" | undefined;
  jobId?: string | undefined;
  status?: "ok" | "error" | "all" | "skipped" | undefined;
  runId?: string | undefined;
  query?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  sortDir?: "asc" | "desc" | undefined;
  statuses?: ("ok" | "error" | "skipped")[] | undefined;
  deliveryStatuses?: ("unknown" | "not-requested" | "delivered" | "not-delivered")[] | undefined;
  deliveryStatus?: "unknown" | "not-requested" | "delivered" | "not-delivered" | undefined;
}>;
declare const validateCronScratchGetParams: ProtocolValidator<{
  id: string;
} | {
  jobId: string;
}>;
declare const validateCronScratchSetParams: ProtocolValidator<{
  id: string;
} | {
  jobId: string;
}>;
declare const validateDevicePairListParams: ProtocolValidator<object>;
declare const validateDevicePairApproveParams: ProtocolValidator<{
  requestId: string;
}>;
declare const validateDevicePairRejectParams: ProtocolValidator<{
  requestId: string;
}>;
declare const validateDevicePairRemoveParams: ProtocolValidator<{
  deviceId: string;
}>;
declare const validateDevicePairSetupCodeParams: ProtocolValidator<{
  publicUrl?: string | undefined;
  preferRemoteUrl?: boolean | undefined;
  includeQr?: boolean | undefined;
  bootstrapProfile?: string | undefined;
}>;
declare const validateDevicePairRenameParams: ProtocolValidator<{
  deviceId: string;
  label: string;
}>;
declare const validateDeviceTokenRotateParams: ProtocolValidator<{
  scopes?: string[] | undefined;
  role: string;
  deviceId: string;
}>;
declare const validateDeviceTokenRevokeParams: ProtocolValidator<{
  role: string;
  deviceId: string;
}>;
declare const validateApprovalPresentation: ProtocolValidator<{
  host?: string | null | undefined;
  agentId?: string | null | undefined;
  nodeId?: string | null | undefined;
  commandPreview?: string | null | undefined;
  warningText?: string | null | undefined;
  kind: "exec";
  commandText: string;
  allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
} | {
  detail?: string | undefined;
  agentId?: string | null | undefined;
  pluginId?: string | null | undefined;
  toolName?: string | null | undefined;
  kind: "plugin";
  description: string;
  title: string;
  severity: "info" | "warning" | "critical";
  allowedDecisions: ("deny" | "allow-once" | "allow-always")[];
} | {
  agentId?: string | null | undefined;
  kind: "system-agent";
  description: string;
  title: string;
  allowedDecisions: ["allow-once", "deny"];
  proposalHash: string;
}>;
declare const validateApprovalGetParams: ProtocolValidator<{
  id: string;
}>;
declare const validateApprovalHistoryParams: ProtocolValidator<{
  kind?: "plugin" | "system-agent" | "exec" | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
}>;
declare const validateApprovalResolveParams: ProtocolValidator<{
  id: string;
  kind: "plugin" | "system-agent" | "exec";
  decision: "deny" | "allow-once" | "allow-always";
}>;
declare const validateExecApprovalsGetParams: ProtocolValidator<object>;
declare const validateExecApprovalsSetParams: ProtocolValidator<{
  baseHash?: string | undefined;
  file: {
    agents?: Record<string, {
      security?: string | undefined;
      ask?: string | undefined;
      askFallback?: string | undefined;
      autoAllowSkills?: boolean | undefined;
      allowlist?: {
        id?: string | undefined;
        source?: "allow-always" | undefined;
        commandText?: string | undefined;
        argPattern?: string | undefined;
        lastUsedAt?: number | undefined;
        lastUsedCommand?: string | undefined;
        lastResolvedPath?: string | undefined;
        pattern: string;
      }[] | undefined;
    }> | undefined;
    defaults?: {
      security?: string | undefined;
      ask?: string | undefined;
      askFallback?: string | undefined;
      autoAllowSkills?: boolean | undefined;
    } | undefined;
    socket?: {
      token?: string | undefined;
      path?: string | undefined;
    } | undefined;
    version: 1;
  };
}>;
declare const validateExecApprovalGetParams: ProtocolValidator<{
  id: string;
}>;
declare const validateExecApprovalRequestParams: ProtocolValidator<{
  id?: string | undefined;
  host?: string | null | undefined;
  agentId?: string | null | undefined;
  sessionKey?: string | null | undefined;
  toolCallId?: string | null | undefined;
  command?: string | undefined;
  runId?: string | null | undefined;
  timeoutMs?: number | undefined;
  sessionId?: string | null | undefined;
  cwd?: string | null | undefined;
  nodeId?: string | null | undefined;
  turnSourceChannel?: string | null | undefined;
  turnSourceTo?: string | null | undefined;
  turnSourceAccountId?: string | null | undefined;
  turnSourceThreadId?: string | number | null | undefined;
  env?: Record<string, string> | undefined;
  warningText?: string | null | undefined;
  security?: string | null | undefined;
  ask?: string | null | undefined;
  commandArgv?: string[] | undefined;
  systemRunPlan?: {
    commandPreview?: string | null | undefined;
    policySnapshot?: {
      security: "full" | "deny" | "allowlist";
      ask: "off" | "always" | "on-miss";
      askFallback: "full" | "deny" | "allowlist";
      autoAllowSkills: boolean;
      allowlistRules: {
        source?: "allow-always" | undefined;
        argPattern?: string | undefined;
        pattern: string;
      }[];
    } | undefined;
    mutableFileOperand?: {
      path: string;
      sha256: string;
      argvIndex: number;
    } | null | undefined;
    agentId: string | null;
    sessionKey: string | null;
    cwd: string | null;
    argv: string[];
    commandText: string;
  } | undefined;
  unavailableDecisions?: string[] | undefined;
  commandSpans?: {
    startIndex: number;
    endIndex: number;
  }[] | undefined;
  resolvedPath?: string | null | undefined;
  approvalReviewerDeviceIds?: string[] | undefined;
  requireDeliveryRoute?: boolean | undefined;
  suppressDelivery?: boolean | undefined;
  twoPhase?: boolean | undefined;
}>;
declare const validateExecApprovalResolveParams: ProtocolValidator<{
  id: string;
  decision: string;
}>;
declare const validateQuestionRequestParams: ProtocolValidator<{
  id?: string | undefined;
  agentId?: string | undefined;
  sessionKey?: string | undefined;
  runId?: string | undefined;
  timeoutMs?: number | undefined;
  questions: {
    isOther?: boolean | undefined;
    multiSelect?: boolean | undefined;
    isSecret?: boolean | undefined;
    question: string;
    options: {
      description?: string | undefined;
      label: string;
    }[];
    header: string;
    questionId: string;
  }[];
}>;
declare const validateQuestionWaitAnswerParams: ProtocolValidator<{
  timeoutMs?: number | undefined;
  id: string;
}>;
declare const validateQuestionResolveParams: ProtocolValidator<{
  resolvedBy?: string | undefined;
  id: string;
  answers: {
    answers: Record<string, string[]>;
  };
} | {
  resolvedBy?: string | undefined;
  id: string;
  cancel: true;
}>;
declare const validateQuestionGetParams: ProtocolValidator<{
  id: string;
}>;
declare const validateQuestionListParams: ProtocolValidator<object>;
declare const validatePluginApprovalRequestParams: ProtocolValidator<{
  detail?: string | undefined;
  agentId?: string | undefined;
  pluginId?: string | undefined;
  sessionKey?: string | undefined;
  toolName?: string | undefined;
  toolCallId?: string | undefined;
  timeoutMs?: number | undefined;
  turnSourceChannel?: string | undefined;
  turnSourceTo?: string | undefined;
  turnSourceAccountId?: string | undefined;
  turnSourceThreadId?: string | number | undefined;
  severity?: string | undefined;
  allowedDecisions?: string[] | undefined;
  approvalReviewerDeviceIds?: string[] | undefined;
  twoPhase?: boolean | undefined;
  description: string;
  title: string;
}>;
declare const validatePluginApprovalResolveParams: ProtocolValidator<{
  id: string;
  decision: string;
}>;
declare const validatePluginsListParams: ProtocolValidator<object>;
declare const validatePluginsRefreshParams: ProtocolValidator<object>;
declare const validatePluginsSearchParams: ProtocolValidator<{
  limit?: number | undefined;
  query: string;
}>;
declare const validatePluginsInstallParams: ProtocolValidator<{
  version?: string | undefined;
  acknowledgeClawHubRisk?: boolean | undefined;
  source: "clawhub";
  packageName: string;
} | {
  source: "official";
  pluginId: string;
}>;
declare const validatePluginsSetEnabledParams: ProtocolValidator<{
  enabled: boolean;
  pluginId: string;
}>;
declare const validatePluginsUninstallParams: ProtocolValidator<{
  pluginId: string;
}>;
declare const validatePluginsUiDescriptorsParams: ProtocolValidator<object>;
declare const validatePluginsUiDescriptorsResult: ProtocolValidator<{
  ok: true;
  descriptors: {
    description?: string | undefined;
    placement?: string | undefined;
    requiredScopes?: string[] | undefined;
    schema?: unknown;
    pluginName?: string | undefined;
    id: string;
    pluginId: string;
    label: string;
    surface: "widget" | "session" | "tool" | "run" | "settings" | "tab";
  }[];
}>;
declare const validatePluginsSessionActionParams: ProtocolValidator<{
  payload?: unknown;
  sessionKey?: string | undefined;
  pluginId: string;
  actionId: string;
}>;
declare const validatePluginsSessionActionResult: ProtocolValidator<{
  reply?: unknown;
  result?: unknown;
  continueAgent?: boolean | undefined;
  ok: true;
} | {
  code?: string | undefined;
  details?: unknown;
  ok: false;
  error: string;
}>;
declare const validateExecApprovalsNodeGetParams: ProtocolValidator<{
  nodeId: string;
}>;
declare const validateExecApprovalsNodeSetParams: ProtocolValidator<{
  file?: {
    agents?: Record<string, {
      security?: string | undefined;
      ask?: string | undefined;
      askFallback?: string | undefined;
      autoAllowSkills?: boolean | undefined;
      allowlist?: {
        id?: string | undefined;
        source?: "allow-always" | undefined;
        commandText?: string | undefined;
        argPattern?: string | undefined;
        lastUsedAt?: number | undefined;
        lastUsedCommand?: string | undefined;
        lastResolvedPath?: string | undefined;
        pattern: string;
      }[] | undefined;
    }> | undefined;
    defaults?: {
      security?: string | undefined;
      ask?: string | undefined;
      askFallback?: string | undefined;
      autoAllowSkills?: boolean | undefined;
    } | undefined;
    socket?: {
      token?: string | undefined;
      path?: string | undefined;
    } | undefined;
    version: 1;
  } | undefined;
  baseHash?: string | undefined;
  native?: {
    defaultAction?: "prompt" | "allow" | "deny" | undefined;
    rules: {
      enabled?: boolean | undefined;
      description?: string | undefined;
      shells?: string[] | undefined;
      pattern: string;
      action: "prompt" | "allow" | "deny";
    }[];
  } | undefined;
  nodeId: string;
}>;
declare const validateExecApprovalsNodeSnapshot: ProtocolValidator<{
  enabled?: boolean | undefined;
  path?: string | undefined;
  message?: string | undefined;
  file?: {
    agents?: Record<string, {
      security?: string | undefined;
      ask?: string | undefined;
      askFallback?: string | undefined;
      autoAllowSkills?: boolean | undefined;
      allowlist?: {
        id?: string | undefined;
        source?: "allow-always" | undefined;
        commandText?: string | undefined;
        argPattern?: string | undefined;
        lastUsedAt?: number | undefined;
        lastUsedCommand?: string | undefined;
        lastResolvedPath?: string | undefined;
        pattern: string;
      }[] | undefined;
    }> | undefined;
    defaults?: {
      security?: string | undefined;
      ask?: string | undefined;
      askFallback?: string | undefined;
      autoAllowSkills?: boolean | undefined;
    } | undefined;
    socket?: {
      token?: string | undefined;
      path?: string | undefined;
    } | undefined;
    version: 1;
  } | undefined;
  hash?: string | undefined;
  baseHash?: string | undefined;
  exists?: boolean | undefined;
  resolvedDefaults?: {
    security: "full" | "deny" | "allowlist";
    ask: "off" | "always" | "on-miss";
    askFallback: "full" | "deny" | "allowlist";
    autoAllowSkills: boolean;
  } | undefined;
  defaultAction?: "prompt" | "allow" | "deny" | undefined;
  rules?: {
    enabled?: boolean | undefined;
    description?: string | undefined;
    shells?: string[] | undefined;
    pattern: string;
    action: "prompt" | "allow" | "deny";
  }[] | undefined;
  constraints?: {
    baseHashRequired?: boolean | undefined;
    defaultAllowAllowed?: boolean | undefined;
    broadAllowRulesAllowed?: boolean | undefined;
    dangerousAllowRulesAllowed?: boolean | undefined;
  } | undefined;
}>;
declare const validateLogsTailParams: ProtocolValidator<{
  limit?: number | undefined;
  cursor?: number | undefined;
  maxBytes?: number | undefined;
}>;
declare const validateModelsProbeParams: ProtocolValidator<{
  agentId?: string | undefined;
  profileId?: string | undefined;
  timeoutMs?: number | undefined;
  provider: string;
}>;
declare const validateChatHistoryParams: ProtocolValidator<{
  agentId?: string | undefined;
  messageId?: string | undefined;
  limit?: number | undefined;
  sessionId?: string | undefined;
  offset?: number | undefined;
  maxChars?: number | undefined;
  sessionKey: string;
}>;
declare const validateChatMetadataParams: ProtocolValidator<{
  agentId?: string | undefined;
}>;
declare const validateChatMessageGetParams: ProtocolValidator<{
  agentId?: string | undefined;
  maxChars?: number | undefined;
  sessionKey: string;
  messageId: string;
}>;
declare const validateChatToolTitlesParams: ProtocolValidator<{
  agentId?: string | undefined;
  items: {
    id: string;
    name: string;
    input: string;
  }[];
  sessionKey: string;
}>;
declare const validateChatSendParams: ProtocolValidator<{
  agentId?: string | undefined;
  timeoutMs?: number | undefined;
  replyToId?: string | undefined;
  sessionId?: string | undefined;
  thinking?: string | undefined;
  deliver?: boolean | undefined;
  attachments?: {
    type?: string | undefined;
    durationMs?: number | undefined;
    content?: unknown;
    mimeType?: string | undefined;
    sizeBytes?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    fileName?: string | undefined;
  }[] | undefined;
  fastMode?: boolean | "auto" | undefined;
  fastAutoOnSeconds?: number | undefined;
  queueMode?: string | undefined;
  originatingChannel?: string | undefined;
  originatingTo?: string | undefined;
  originatingAccountId?: string | undefined;
  originatingThreadId?: string | undefined;
  toolBindings?: Record<string, unknown> | undefined;
  systemInputProvenance?: {
    sourceSessionKey?: string | undefined;
    originSessionId?: string | undefined;
    sourceChannel?: string | undefined;
    sourceTool?: string | undefined;
    kind: string;
  } | undefined;
  systemProvenanceReceipt?: string | undefined;
  suppressCommandInterpretation?: boolean | undefined;
  expectedLeafEntryId?: string | null | undefined;
  expectedSessionRoutingContract?: string | undefined;
  message: string;
  sessionKey: string;
  idempotencyKey: string;
}>;
declare const validateChatAbortParams: ProtocolValidator<{
  agentId?: string | undefined;
  runId?: string | undefined;
  preserveSideRuns?: boolean | undefined;
  sessionKey: string;
}>;
declare const validateChatInjectParams: ProtocolValidator<{
  agentId?: string | undefined;
  label?: string | undefined;
  message: string;
  sessionKey: string;
}>;
declare const validateUpdateStatusParams: ProtocolValidator<object>;
declare const validateUpdateRunParams: ProtocolValidator<{
  sessionKey?: string | undefined;
  timeoutMs?: number | undefined;
  deliveryContext?: {
    channel?: string | undefined;
    accountId?: string | undefined;
    threadId?: string | number | undefined;
    to?: string | undefined;
  } | undefined;
  note?: string | undefined;
  restartDelayMs?: number | undefined;
  continuationMessage?: string | undefined;
}>;
declare const validateUiCommandParams: ProtocolValidator<{
  sessionKey?: string | undefined;
  command: {
    kind: "split";
    sessionKey: string;
    direction: "right" | "down";
  } | {
    kind: "close-pane";
    sessionKey: string;
  } | {
    kind: "focus";
    sessionKey: string;
  } | {
    kind: "sidebar";
    visible: boolean;
  } | {
    dock?: "right" | "bottom" | undefined;
    terminalSessionId?: string | undefined;
    kind: "panel";
    panel: "terminal" | "browser";
    open: boolean;
  } | {
    kind: "navigate";
    sessionKey: string;
  };
}>;
declare const validateWebLoginStartParams: ProtocolValidator<{
  force?: boolean | undefined;
  accountId?: string | undefined;
  timeoutMs?: number | undefined;
  verbose?: boolean | undefined;
}>;
declare const validateWebLoginWaitParams: ProtocolValidator<{
  accountId?: string | undefined;
  timeoutMs?: number | undefined;
  currentQrDataUrl?: string | undefined;
}>;
//#endregion
//#region src/index.d.ts
type SessionsPatchResult = {
  ok: true;
  path: string;
  key: string;
  entry: Record<string, unknown>;
  resolved?: {
    modelProvider?: string;
    model?: string;
    agentRuntime?: GatewayAgentRuntime;
    thinkingLevel?: string;
    thinkingLevels?: Array<{
      id: string;
      label: string;
    }>;
  };
};
//#endregion
export { type AgentEvent, AgentEventSchema, type AgentIdentityParams, AgentIdentityParamsSchema, type AgentIdentityResult, AgentIdentityResultSchema, type AgentKind, AgentKindSchema, AgentParamsSchema, type AgentSummary, AgentSummarySchema, type AgentWaitParams, type AgentWaitParamsSchema, type AgentsCreateParams, AgentsCreateParamsSchema, type AgentsCreateResult, AgentsCreateResultSchema, type AgentsDeleteParams, AgentsDeleteParamsSchema, type AgentsDeleteResult, AgentsDeleteResultSchema, type AgentsFileEntry, AgentsFileEntrySchema, type AgentsFilesGetParams, AgentsFilesGetParamsSchema, type AgentsFilesGetResult, AgentsFilesGetResultSchema, type AgentsFilesListParams, AgentsFilesListParamsSchema, type AgentsFilesListResult, AgentsFilesListResultSchema, type AgentsFilesSetParams, AgentsFilesSetParamsSchema, type AgentsFilesSetResult, AgentsFilesSetResultSchema, type AgentsListParams, AgentsListParamsSchema, type AgentsListResult, AgentsListResultSchema, type AgentsUpdateParams, AgentsUpdateParamsSchema, type AgentsUpdateResult, AgentsUpdateResultSchema, type AgentsWorkspaceEntry, AgentsWorkspaceEntrySchema, type AgentsWorkspaceFile, AgentsWorkspaceFileSchema, type AgentsWorkspaceGetParams, AgentsWorkspaceGetParamsSchema, type AgentsWorkspaceGetResult, AgentsWorkspaceGetResultSchema, type AgentsWorkspaceListParams, AgentsWorkspaceListParamsSchema, type AgentsWorkspaceListResult, AgentsWorkspaceListResultSchema, type AllowedApprovalSnapshot, AllowedApprovalSnapshotSchema, type ApprovalAllowDecision, ApprovalAllowDecisionSchema, type ApprovalAllowedReasonSchema, type ApprovalCancelledReasonSchema, type ApprovalDecision, ApprovalDecisionSchema, type ApprovalDeniedReasonSchema, type ApprovalExpiredReasonSchema, type ApprovalGetParams, ApprovalGetParamsSchema, type ApprovalGetResult, ApprovalGetResultSchema, type ApprovalHistoryParams, ApprovalHistoryParamsSchema, type ApprovalHistoryResult, ApprovalHistoryResultSchema, type ApprovalKind, ApprovalKindSchema, type ApprovalPresentation, ApprovalPresentationSchema, type ApprovalResolveParams, ApprovalResolveParamsSchema, type ApprovalResolveResult, ApprovalResolveResultSchema, type ApprovalSnapshot, ApprovalSnapshotSchema, type ApprovalTerminalReason, ApprovalTerminalReasonSchema, type ArtifactSummary, ArtifactSummarySchema, type ArtifactsDownloadParams, ArtifactsDownloadParamsSchema, type ArtifactsDownloadResult, type ArtifactsDownloadResultSchema, type ArtifactsGetParams, ArtifactsGetParamsSchema, type ArtifactsGetResult, type ArtifactsGetResultSchema, type ArtifactsListParams, ArtifactsListParamsSchema, type ArtifactsListResult, type ArtifactsListResultSchema, type AuditActivityAgentRunV1, AuditActivityAgentRunV1Schema, type AuditActivityEventV1, AuditActivityEventV1Schema, type AuditActivityInboundMessageV1, AuditActivityInboundMessageV1Schema, type AuditActivityListParams, AuditActivityListParamsSchema, type AuditActivityListResult, AuditActivityListResultSchema, type AuditActivityOutboundMessageV1, AuditActivityOutboundMessageV1Schema, type AuditActivityToolActionV1, AuditActivityToolActionV1Schema, type AuditEvent, AuditEventSchema, type AuditListParams, AuditListParamsSchema, type AuditListResult, AuditListResultSchema, type AuthProbeStatus, AuthProbeStatusSchema, BOARD_CRON_JOB_ID_MAX_LENGTH, BOARD_CRON_TRIGGER_PREFIX, BOARD_DATA_BINDING_ID_MAX_LENGTH, BOARD_WIDGET_TOOL_MAX_LENGTH, BoardActionParams, BoardActionParamsSchema, BoardCanvasDocumentSource, BoardCanvasDocumentSourceSchema, BoardChangedEvent, BoardChangedEventSchema, BoardChatDockSchema, BoardCommand, BoardCommandEvent, BoardCommandEventSchema, BoardCommandSchema, BoardCronActionParamsSchema, BoardDataReadParams, BoardDataReadParamsSchema, BoardEventParams, BoardEventParamsSchema, BoardFocusTabCommandSchema, BoardGetParams, BoardGetParamsSchema, BoardLegacyEventParamsSchema, BoardMcpAppDescriptor, BoardMcpAppDescriptorSchema, BoardOp, BoardOpSchema, BoardPluginActionParamsSchema, BoardPromptAuthorizeParams, BoardPromptAuthorizeParamsSchema, BoardSetChatDockCommandSchema, BoardSizeSchema, BoardSnapshot, BoardSnapshotSchema, BoardTab, BoardTabCreateOpSchema, BoardTabDeleteOpSchema, BoardTabIdSchema, BoardTabSchema, BoardTabUpdateOpSchema, BoardTabsReorderOpSchema, BoardTicketEventParamsSchema, BoardUpdateParams, BoardUpdateParamsSchema, BoardViewTicketSchema, BoardWidget, BoardWidgetAppViewParams, BoardWidgetAppViewParamsSchema, BoardWidgetAppViewResult, BoardWidgetAppViewResultSchema, BoardWidgetContent, BoardWidgetContentSchema, BoardWidgetDeclared, BoardWidgetDeclaredSchema, BoardWidgetGrantParams, BoardWidgetGrantParamsSchema, BoardWidgetHeightModeSchema, BoardWidgetHtmlContentSchema, BoardWidgetMaterializedContent, BoardWidgetMaterializedPutParams, BoardWidgetMcpAppContentSchema, BoardWidgetMcpAppPutContentSchema, BoardWidgetMoveOpSchema, BoardWidgetNameSchema, BoardWidgetPluginContentSchema, BoardWidgetPluginKindSchema, BoardWidgetPluginPropsSchema, BoardWidgetPresentationSchema, BoardWidgetPutContent, BoardWidgetPutContentSchema, BoardWidgetPutParams, BoardWidgetPutParamsSchema, BoardWidgetRemoveOpSchema, BoardWidgetResizeOpSchema, BoardWidgetSchema, type CHAT_SEND_SESSION_KEY_MAX_LENGTH, type COMMAND_ALIAS_MAX_ITEMS, type COMMAND_ARGS_MAX_ITEMS, type COMMAND_ARG_CHOICES_MAX_ITEMS, type COMMAND_ARG_DESCRIPTION_MAX_LENGTH, type COMMAND_ARG_NAME_MAX_LENGTH, type COMMAND_CHOICE_LABEL_MAX_LENGTH, type COMMAND_CHOICE_VALUE_MAX_LENGTH, type COMMAND_DESCRIPTION_MAX_LENGTH, type COMMAND_LIST_MAX_ITEMS, type COMMAND_NAME_MAX_LENGTH, type CancelledApprovalSnapshot, CancelledApprovalSnapshotSchema, type ChannelsLogoutParams, ChannelsLogoutParamsSchema, type ChannelsPairingAccount, type ChannelsPairingApproveParams, ChannelsPairingApproveParamsSchema, type ChannelsPairingApproveResult, ChannelsPairingApproveResultSchema, type ChannelsPairingDismissParams, ChannelsPairingDismissParamsSchema, type ChannelsPairingDismissResult, ChannelsPairingDismissResultSchema, type ChannelsPairingListParams, ChannelsPairingListParamsSchema, type ChannelsPairingListResult, ChannelsPairingListResultSchema, type ChannelsPairingRequest, type ChannelsStartParams, ChannelsStartParamsSchema, type ChannelsStatusParams, ChannelsStatusParamsSchema, type ChannelsStatusResult, ChannelsStatusResultSchema, type ChannelsStopParams, ChannelsStopParamsSchema, type ChatAbortParams, type ChatAbortParamsSchema, type ChatAbortedEventSchema, type ChatAttachmentSchema, type ChatAttachmentsSchema, type ChatDeltaEventSchema, type ChatErrorEventSchema, type ChatEvent, ChatEventSchema, type ChatFinalEventSchema, ChatHistoryParamsSchema, type ChatInjectParams, ChatInjectParamsSchema, type ChatMessageGetParamsSchema, type ChatMessageGetResult, type ChatMessageGetResultSchema, type ChatMetadataParams, ChatMetadataParamsSchema, type ChatRunStartupPhase, ChatRunStartupPhaseSchema, ChatSendParamsSchema, type ChatSendSessionKeyString, type ChatStatusEvent, ChatStatusEventSchema, type ChatToolTitlesParams, ChatToolTitlesParamsSchema, type ChatToolTitlesResult, ChatToolTitlesResultSchema, ClawHubTrustErrorCodes, ClawHubTrustErrorDetails, type CommandEntry, type CommandEntrySchema, type CommandsListParams, CommandsListParamsSchema, type CommandsListResult, CommandsListResultSchema, type ConfigApplyParams, ConfigApplyParamsSchema, type ConfigGetParams, ConfigGetParamsSchema, type ConfigPatchParams, ConfigPatchParamsSchema, type ConfigSchemaLookupParams, ConfigSchemaLookupParamsSchema, type ConfigSchemaLookupResult, ConfigSchemaLookupResultSchema, type ConfigSchemaParams, ConfigSchemaParamsSchema, type ConfigSchemaResponse, ConfigSchemaResponseSchema, type ConfigSetParams, ConfigSetParamsSchema, type ConnectParams, ConnectParamsSchema, type ConversationListItem, ConversationListItemSchema, type ConversationListParams, ConversationListParamsSchema, type ConversationListResult, ConversationListResultSchema, type ConversationSendParams, ConversationSendParamsSchema, type ConversationSendResult, ConversationSendResultSchema, type ConversationTurnCancelParams, ConversationTurnCancelParamsSchema, type ConversationTurnCancelResult, ConversationTurnCancelResultSchema, type ConversationTurnParams, ConversationTurnParamsSchema, type ConversationTurnReply, ConversationTurnReplySchema, type ConversationTurnResult, ConversationTurnResultSchema, type CronAddParams, CronAddParamsSchema, type CronAddResult, CronAddResultSchema, type CronDeclarativeAddResult, CronDeclarativeAddResultSchema, type CronDeliverySchema, type CronGetParams, CronGetParamsSchema, type CronJob, CronJobSchema, type CronJobStateSchema, type CronListParams, CronListParamsSchema, type CronPacingSchema, type CronRemoveParams, CronRemoveParamsSchema, type CronRunLogEntry, type CronRunLogEntrySchema, type CronRunParams, CronRunParamsSchema, type CronRunsParams, CronRunsParamsSchema, type CronScratchGetParams, CronScratchGetParamsSchema, type CronScratchGetResult, CronScratchGetResultSchema, type CronScratchSchema, type CronScratchSetParams, CronScratchSetParamsSchema, type CronScratchSetResult, CronScratchSetResultSchema, type CronStatusParams, CronStatusParamsSchema, type CronUpdateParams, CronUpdateParamsSchema, type DeniedApprovalSnapshot, DeniedApprovalSnapshotSchema, type DevicePairApproveParams, type DevicePairApproveParamsSchema, type DevicePairListParams, type DevicePairListParamsSchema, type DevicePairRejectParams, type DevicePairRejectParamsSchema, type DevicePairRemoveParams, type DevicePairRemoveParamsSchema, type DevicePairRenameParams, type DevicePairRenameParamsSchema, type DevicePairRequestedEventSchema, type DevicePairResolvedEventSchema, type DevicePairSetupCodeParams, type DevicePairSetupCodeParamsSchema, type DevicePairSetupCodeResult, type DevicePairSetupCodeResultSchema, type DeviceTokenRevokeParams, type DeviceTokenRevokeParamsSchema, type DeviceTokenRotateParams, type DeviceTokenRotateParamsSchema, type EnvironmentStatus, EnvironmentStatusSchema, type EnvironmentSummary, EnvironmentSummarySchema, type EnvironmentsCreateParams, EnvironmentsCreateParamsSchema, type EnvironmentsCreateResult, EnvironmentsCreateResultSchema, type EnvironmentsDestroyParams, EnvironmentsDestroyParamsSchema, type EnvironmentsDestroyResult, EnvironmentsDestroyResultSchema, type EnvironmentsListParams, EnvironmentsListParamsSchema, type EnvironmentsListResult, EnvironmentsListResultSchema, type EnvironmentsStatusParams, EnvironmentsStatusParamsSchema, type EnvironmentsStatusResult, EnvironmentsStatusResultSchema, type ErrorCode, ErrorCodes, type ErrorShape, ErrorShapeSchema, type EventFrame, EventFrameSchema, type ExecApprovalGetParams, ExecApprovalGetParamsSchema, type ExecApprovalPresentation, ExecApprovalPresentationSchema, type ExecApprovalRequestParams, ExecApprovalRequestParamsSchema, type ExecApprovalResolveParams, ExecApprovalResolveParamsSchema, type ExecApprovalsGetParams, ExecApprovalsGetParamsSchema, type ExecApprovalsNodeGetParams, type ExecApprovalsNodeGetParamsSchema, type ExecApprovalsNodeSetParams, type ExecApprovalsNodeSetParamsSchema, type ExecApprovalsNodeSnapshot, type ExecApprovalsNodeSnapshotSchema, type ExecApprovalsSetParams, ExecApprovalsSetParamsSchema, type ExecApprovalsSnapshot, type ExecApprovalsSnapshotSchema, type ExpiredApprovalSnapshot, ExpiredApprovalSnapshotSchema, type FsDirEntry, FsDirEntrySchema, type FsListDirParams, FsListDirParamsSchema, type FsListDirResult, FsListDirResultSchema, GATEWAY_SERVER_CAPS, type GatewayAgentRuntime, type GatewayClientIdSchema, type GatewayClientModeSchema, GatewayErrorDetailCodes, type GatewayErrorDetails, GatewayErrorDetailsSchema, type GatewayFrame, GatewayFrameSchema, type GatewaySuspendBlocker, GatewaySuspendBlockerSchema, GatewaySuspendPrepareBusyResultSchema, type GatewaySuspendPrepareParams, GatewaySuspendPrepareParamsSchema, GatewaySuspendPrepareReadyResultSchema, type GatewaySuspendPrepareResult, GatewaySuspendPrepareResultSchema, type GatewaySuspendResumeParams, GatewaySuspendResumeParamsSchema, type GatewaySuspendResumeResult, GatewaySuspendResumeResultSchema, type GatewaySuspendStatusParams, GatewaySuspendStatusParamsSchema, GatewaySuspendStatusReadyResultSchema, type GatewaySuspendStatusResult, GatewaySuspendStatusResultSchema, GatewaySuspendStatusRunningResultSchema, type GatewaySuspendTaskBlocker, GatewaySuspendTaskBlockerSchema, type HelloOk, HelloOkSchema, type InputProvenanceSchema, type LogsTailParams, LogsTailParamsSchema, type LogsTailResult, LogsTailResultSchema, MAX_MEMORY_MIGRATION_ITEMS, MIN_CLIENT_PROTOCOL_VERSION, MIN_NODE_PROTOCOL_VERSION, MIN_PROBE_PROTOCOL_VERSION, type McpAppViewExpiredErrorDetails, type McpAppViewExpiredErrorDetailsSchema, MemoryMigrationItem, MemoryMigrationProviderPlan, type MessageActionParams, MessageActionParamsSchema, MigrationProtocolSchemas, MigrationsMemoryApplyParamsSchema, MigrationsMemoryApplyResult, MigrationsMemoryPlanParamsSchema, MigrationsMemoryPlanResult, type MissingScopeErrorDetails, MissingScopeErrorDetailsSchema, type ModelChoice, type ModelChoiceSchema, type ModelsAuthLogoutParams, ModelsAuthLogoutParamsSchema, type ModelsAuthStatusParams, ModelsAuthStatusParamsSchema, type ModelsListParams, ModelsListParamsSchema, type ModelsListResult, type ModelsListResultSchema, type ModelsProbeParams, ModelsProbeParamsSchema, type ModelsProbeResult, ModelsProbeResultSchema, type ModelsProbeTargetResult, ModelsProbeTargetResultSchema, type NodeDescribeParams, type NodeDescribeParamsSchema, type NodeEventParams, type NodeEventParamsSchema, type NodeEventResult, NodeEventResultSchema, type NodeInvokeInputEvent, NodeInvokeInputEventSchema, type NodeInvokeParams, NodeInvokeParamsSchema, type NodeInvokeProgressParams, NodeInvokeProgressParamsSchema, type NodeInvokeRequestEventSchema, type NodeInvokeResultParams, type NodeInvokeResultParamsSchema, type NodeListParams, NodeListParamsSchema, type NodePairApproveParams, NodePairApproveParamsSchema, type NodePairListParams, NodePairListParamsSchema, type NodePairRejectParams, NodePairRejectParamsSchema, type NodePairRemoveParams, NodePairRemoveParamsSchema, type NodePendingAckParams, NodePendingAckParamsSchema, type NodePendingDrainParams, NodePendingDrainParamsSchema, type NodePendingDrainResult, NodePendingDrainResultSchema, type NodePendingEnqueueParams, NodePendingEnqueueParamsSchema, type NodePendingEnqueueResult, NodePendingEnqueueResultSchema, type NodePluginToolDescriptor, NodePluginToolDescriptorSchema, type NodePluginToolsUpdateParams, NodePluginToolsUpdateParamsSchema, type NodePresenceActivityPayload, NodePresenceActivityPayloadSchema, type NodePresenceAlivePayload, NodePresenceAlivePayloadSchema, type NodePresenceAliveReason, NodePresenceAliveReasonSchema, type NodeRenameParams, type NodeRenameParamsSchema, type NodeSkillDescriptor, NodeSkillDescriptorSchema, type NodeSkillsUpdateParams, NodeSkillsUpdateParamsSchema, type NonEmptyString, PROTOCOL_VERSION, type PendingApprovalSnapshot, PendingApprovalSnapshotSchema, type PendingSessionApprovalEventSchema, type PluginApprovalPresentation, PluginApprovalPresentationSchema, type PluginApprovalRequestParams, type PluginApprovalRequestParamsSchema, type PluginApprovalResolveParams, type PluginApprovalResolveParamsSchema, type PluginApprovalSeverity, PluginApprovalSeveritySchema, type PluginCatalogClawHubInstallSchema, type PluginCatalogEntry, PluginCatalogEntrySchema, PluginCatalogInstallActionSchema, type PluginCatalogOfficialInstallSchema, type PluginControlUiDescriptor, type PluginControlUiDescriptorSchema, type PluginJsonValueSchema, PluginSearchPackageSchema, PluginSearchResultEntrySchema, type PluginsInstallParams, PluginsInstallParamsSchema, type PluginsInstallResult, PluginsInstallResultSchema, type PluginsListParams, PluginsListParamsSchema, type PluginsListResult, PluginsListResultSchema, type PluginsRefreshParams, PluginsRefreshParamsSchema, type PluginsRefreshResult, PluginsRefreshResultSchema, type PluginsSearchParams, PluginsSearchParamsSchema, type PluginsSearchResult, PluginsSearchResultSchema, type PluginsSessionActionFailureResultSchema, type PluginsSessionActionParams, PluginsSessionActionParamsSchema, type PluginsSessionActionResult, PluginsSessionActionResultSchema, type PluginsSessionActionSuccessResultSchema, type PluginsSetEnabledParams, PluginsSetEnabledParamsSchema, type PluginsSetEnabledResult, PluginsSetEnabledResultSchema, type PluginsUiDescriptorsParams, PluginsUiDescriptorsParamsSchema, type PluginsUiDescriptorsResult, PluginsUiDescriptorsResultSchema, type PluginsUninstallParams, PluginsUninstallParamsSchema, type PluginsUninstallResult, PluginsUninstallResultSchema, type PollParams, PollParamsSchema, type PresenceEntry, PresenceEntrySchema, type ProtocolValidator, type PushTestParams, PushTestParamsSchema, type PushTestResult, PushTestResultSchema, type Question, type QuestionAnswers, QuestionAnswersSchema, type QuestionGetParams, QuestionGetParamsSchema, type QuestionGetResult, QuestionGetResultSchema, type QuestionListParams, QuestionListParamsSchema, type QuestionListResult, QuestionListResultSchema, type QuestionOption, QuestionOptionSchema, type QuestionRecord, QuestionRecordSchema, type QuestionRequestParams, QuestionRequestParamsSchema, type QuestionRequestQuestion, QuestionRequestQuestionSchema, type QuestionRequestResult, QuestionRequestResultSchema, type QuestionRequestedEvent, QuestionRequestedEventSchema, type QuestionResolveParams, QuestionResolveParamsSchema, type QuestionResolveResult, QuestionResolveResultSchema, type QuestionResolvedEvent, QuestionResolvedEventSchema, QuestionSchema, type QuestionStatus, QuestionStatusSchema, type QuestionWaitAnswerParams, QuestionWaitAnswerParamsSchema, type QuestionWaitAnswerResult, QuestionWaitAnswerResultSchema, type RequestFrame, RequestFrameSchema, type ResponseFrame, ResponseFrameSchema, SESSION_AGENT_ATTENTION_ICON_IDS, SESSION_OBSERVER_HEALTH_VALUES, type SESSION_VIEWER_PRESENCE_MAX_KEYS, type SESSION_VISIBILITY_VALUES, type SYSTEM_PRESENCE_CLEAR_LAST_INPUT_TAG, type SYSTEM_PRESENCE_LEGACY_CLEAR_LAST_INPUT_SECONDS, type SecretInputSchema, type SecretRefSchema, type SecretsReloadParamsSchema, type SecretsResolveAssignmentSchema, type SecretsResolveParams, type SecretsResolveParamsSchema, type SecretsResolveResult, type SecretsResolveResultSchema, SendParamsSchema, SessionAgentAttentionIconId, SessionAgentStatus, type SessionApprovalEvent, SessionApprovalEventSchema, type SessionApprovalReplay, SessionApprovalReplaySchema, type SessionBranch, SessionBranchSchema, type SessionCatalog, type SessionCatalogCapabilities, SessionCatalogCapabilitiesSchema, type SessionCatalogDescriptor, SessionCatalogDescriptorSchema, type SessionCatalogHost, SessionCatalogHostSchema, type SessionCatalogLocator, SessionCatalogLocatorSchema, type SessionCatalogPullRequestSummary, SessionCatalogPullRequestSummarySchema, SessionCatalogSchema, type SessionCatalogSession, SessionCatalogSessionSchema, type SessionCatalogTranscriptItem, SessionCatalogTranscriptItemSchema, type SessionCompactionCheckpoint, type SessionCompactionCheckpointSchema, type SessionCompanionExchange, SessionCompanionExchangeSchema, type SessionCreatedActor, SessionCreatedActorSchema, type SessionDiffFile, SessionDiffFileSchema, type SessionDiffFileStatus, SessionDiffFileStatusSchema, type SessionDiscussionInfo, type SessionDiscussionInfoParams, SessionDiscussionInfoParamsSchema, type SessionDiscussionInfoResult, SessionDiscussionInfoResultSchema, SessionDiscussionInfoSchema, type SessionDiscussionOpenParams, SessionDiscussionOpenParamsSchema, type SessionDiscussionOpenResult, SessionDiscussionOpenResultSchema, type SessionDiscussionState, SessionDiscussionStateSchema, type SessionFileBrowserEntry, SessionFileBrowserEntrySchema, type SessionFileBrowserResult, SessionFileBrowserResultSchema, type SessionFileContentEncoding, SessionFileContentEncodingSchema, type SessionFileEntry, SessionFileEntrySchema, type SessionFileKind, SessionFileKindSchema, type SessionFilePreviewKind, SessionFilePreviewKindSchema, type SessionFileRelevance, SessionFileRelevanceSchema, type SessionGroup, SessionGroupSchema, SessionIcon, SessionIconNormalizationResult, type SessionLabelString, type SessionMember, type SessionMemberAddParams, SessionMemberAddParamsSchema, type SessionMemberMutationResult, SessionMemberMutationResultSchema, type SessionMemberRemoveParams, SessionMemberRemoveParamsSchema, SessionMemberSchema, type SessionMembersListParams, SessionMembersListParamsSchema, type SessionMembersListResult, SessionMembersListResultSchema, type SessionObserverDigest, SessionObserverDigestSchema, type SessionObserverHealth, SessionObserverHealthSchema, type SessionObserverPlanProgress, SessionObserverPlanProgressSchema, type SessionOperationEvent, type SessionOperationEventSchema, type SessionPlacement, type SessionPlacementProtocolSchemas, SessionPlacementSchema, type SessionPlacementState, SessionPlacementStateSchema, type SessionRow, SessionRowSchema, type SessionSharingAction, SessionSharingActionSchema, type SessionSharingEvent, SessionSharingEventSchema, type SessionSharingIdentity, SessionSharingIdentitySchema, type SessionSharingRole, SessionSharingRoleSchema, SessionSuggestion, SessionSuggestionAction, SessionSuggestionActionSchema, SessionSuggestionEvent, SessionSuggestionEventSchema, SessionSuggestionResolution, SessionSuggestionResolutionSchema, SessionSuggestionSchema, SessionSuggestionState, SessionSuggestionStateSchema, SessionSuggestionsAddParams, SessionSuggestionsAddParamsSchema, SessionSuggestionsAddResult, SessionSuggestionsAddResultSchema, SessionSuggestionsListParams, SessionSuggestionsListParamsSchema, SessionSuggestionsListResult, SessionSuggestionsListResultSchema, SessionSuggestionsResolveParams, SessionSuggestionsResolveParamsSchema, SessionSuggestionsResolveResult, SessionSuggestionsResolveResultSchema, type SessionToolOverrides, SessionToolOverridesSchema, SessionTypingEvent, SessionTypingEventSchema, SessionTypingParams, SessionTypingParamsSchema, SessionTypingResult, SessionTypingResultSchema, type SessionVisibility, SessionVisibilitySchema, type SessionVisibilitySetParams, SessionVisibilitySetParamsSchema, type SessionVisibilitySetResult, SessionVisibilitySetResultSchema, type SessionWorktreeInfo, SessionWorktreeInfoSchema, type SessionsAbortParams, SessionsAbortParamsSchema, type SessionsBranchesListParams, SessionsBranchesListParamsSchema, type SessionsBranchesListResult, SessionsBranchesListResultSchema, type SessionsBranchesSwitchParams, SessionsBranchesSwitchParamsSchema, type SessionsBranchesSwitchResult, SessionsBranchesSwitchResultSchema, type SessionsCatalogArchiveParams, SessionsCatalogArchiveParamsSchema, type SessionsCatalogArchiveResult, SessionsCatalogArchiveResultSchema, type SessionsCatalogContinueParams, SessionsCatalogContinueParamsSchema, type SessionsCatalogContinueResult, SessionsCatalogContinueResultSchema, type SessionsCatalogHostEvent, SessionsCatalogHostEventSchema, type SessionsCatalogListParams, SessionsCatalogListParamsSchema, type SessionsCatalogListResult, SessionsCatalogListResultSchema, type SessionsCatalogReadParams, SessionsCatalogReadParamsSchema, type SessionsCatalogReadResult, SessionsCatalogReadResultSchema, type SessionsCleanupParams, SessionsCleanupParamsSchema, type SessionsCompactParams, SessionsCompactParamsSchema, type SessionsCompactionBranchParams, SessionsCompactionBranchParamsSchema, type SessionsCompactionBranchResult, type SessionsCompactionBranchResultSchema, type SessionsCompactionGetParams, SessionsCompactionGetParamsSchema, type SessionsCompactionGetResult, type SessionsCompactionGetResultSchema, type SessionsCompactionListParams, SessionsCompactionListParamsSchema, type SessionsCompactionListResult, type SessionsCompactionListResultSchema, type SessionsCompactionRestoreParams, SessionsCompactionRestoreParamsSchema, type SessionsCompactionRestoreResult, type SessionsCompactionRestoreResultSchema, type SessionsCompanionAskParams, SessionsCompanionAskParamsSchema, type SessionsCompanionAskResult, SessionsCompanionAskResultSchema, type SessionsCompanionResetParams, SessionsCompanionResetParamsSchema, type SessionsCompanionResetResult, SessionsCompanionResetResultSchema, type SessionsCompanionStateParams, SessionsCompanionStateParamsSchema, type SessionsCompanionStateResult, SessionsCompanionStateResultSchema, type SessionsCreateParams, SessionsCreateParamsSchema, type SessionsCreateResult, SessionsCreateResultSchema, type SessionsDeleteParams, SessionsDeleteParamsSchema, type SessionsDescribeParams, SessionsDescribeParamsSchema, type SessionsDiffParams, SessionsDiffParamsSchema, type SessionsDiffResult, SessionsDiffResultSchema, type SessionsDispatchParams, SessionsDispatchParamsSchema, type SessionsDispatchResult, SessionsDispatchResultSchema, type SessionsFilesGetParams, SessionsFilesGetParamsSchema, type SessionsFilesGetResult, SessionsFilesGetResultSchema, type SessionsFilesListParams, SessionsFilesListParamsSchema, type SessionsFilesListResult, SessionsFilesListResultSchema, type SessionsFilesRevealParams, SessionsFilesRevealParamsSchema, type SessionsFilesRevealResult, SessionsFilesRevealResultSchema, type SessionsFilesSetParams, SessionsFilesSetParamsSchema, type SessionsFilesSetResult, SessionsFilesSetResultSchema, type SessionsForkParams, SessionsForkParamsSchema, type SessionsForkResult, SessionsForkResultSchema, type SessionsGroupsDeleteParams, SessionsGroupsDeleteParamsSchema, type SessionsGroupsListParams, SessionsGroupsListParamsSchema, type SessionsGroupsListResult, SessionsGroupsListResultSchema, type SessionsGroupsMutationResult, SessionsGroupsMutationResultSchema, type SessionsGroupsPutParams, SessionsGroupsPutParamsSchema, type SessionsGroupsRenameParams, SessionsGroupsRenameParamsSchema, type SessionsListParams, SessionsListParamsSchema, type SessionsMessagesSubscribeParams, type SessionsMessagesSubscribeParamsSchema, type SessionsMessagesUnsubscribeParams, type SessionsMessagesUnsubscribeParamsSchema, type SessionsObserverVisibilityParams, SessionsObserverVisibilityParamsSchema, type SessionsObserverVisibilityResult, SessionsObserverVisibilityResultSchema, type SessionsPatchParams, SessionsPatchParamsSchema, SessionsPatchResult, type SessionsPluginPatchParams, SessionsPluginPatchParamsSchema, type SessionsPluginPatchResult, type SessionsPluginPatchResultSchema, type SessionsPreviewParams, SessionsPreviewParamsSchema, type SessionsReclaimParams, SessionsReclaimParamsSchema, type SessionsReclaimResult, SessionsReclaimResultSchema, type SessionsResetParams, SessionsResetParamsSchema, type SessionsResolveParams, SessionsResolveParamsSchema, type SessionsRewindParams, SessionsRewindParamsSchema, type SessionsRewindResult, SessionsRewindResultSchema, type SessionsSearchHit, SessionsSearchHitSchema, type SessionsSearchParams, SessionsSearchParamsSchema, type SessionsSearchResult, SessionsSearchResultSchema, type SessionsSendParams, SessionsSendParamsSchema, type SessionsUsageParams, SessionsUsageParamsSchema, type SessionsViewerPresenceSetParams, type SessionsViewerPresenceSetParamsSchema, type SessionsViewerPresenceSetResult, type SessionsViewerPresenceSetResultSchema, type ShutdownEvent, ShutdownEventSchema, type SkillProposalEvaluation, SkillProposalEvaluationSchema, type SkillProposalLifecycleEvent, SkillProposalLifecycleEventSchema, type SkillsBinsParams, type SkillsBinsParamsSchema, type SkillsBinsResult, type SkillsBinsResultSchema, type SkillsCuratorActionParams, SkillsCuratorActionParamsSchema, type SkillsCuratorActionResult, SkillsCuratorActionResultSchema, type SkillsCuratorStatusParams, SkillsCuratorStatusParamsSchema, type SkillsCuratorStatusResult, SkillsCuratorStatusResultSchema, type SkillsDetailParams, SkillsDetailParamsSchema, type SkillsDetailResult, SkillsDetailResultSchema, type SkillsInstallParams, SkillsInstallParamsSchema, type SkillsProposalActionParams, SkillsProposalActionParamsSchema, type SkillsProposalApplyResult, SkillsProposalApplyResultSchema, type SkillsProposalCreateParams, SkillsProposalCreateParamsSchema, type SkillsProposalEvaluateParams, SkillsProposalEvaluateParamsSchema, type SkillsProposalEvaluateResult, SkillsProposalEvaluateResultSchema, type SkillsProposalEventsListParams, SkillsProposalEventsListParamsSchema, type SkillsProposalEventsListResult, SkillsProposalEventsListResultSchema, SkillsProposalHistoryScanParams, SkillsProposalHistoryScanParamsSchema, SkillsProposalHistoryScanResult, SkillsProposalHistoryScanResultSchema, SkillsProposalHistoryStatusParams, SkillsProposalHistoryStatusParamsSchema, type SkillsProposalInspectParams, SkillsProposalInspectParamsSchema, type SkillsProposalInspectResult, SkillsProposalInspectResultSchema, type SkillsProposalRecordResult, SkillsProposalRecordResultSchema, type SkillsProposalRequestRevisionParams, SkillsProposalRequestRevisionParamsSchema, type SkillsProposalRequestRevisionResult, SkillsProposalRequestRevisionResultSchema, type SkillsProposalReviseParams, SkillsProposalReviseParamsSchema, type SkillsProposalUpdateParams, SkillsProposalUpdateParamsSchema, type SkillsProposalsListParams, SkillsProposalsListParamsSchema, type SkillsProposalsListResult, SkillsProposalsListResultSchema, type SkillsSearchParams, SkillsSearchParamsSchema, type SkillsSearchResult, SkillsSearchResultSchema, type SkillsSecurityVerdictsParams, SkillsSecurityVerdictsParamsSchema, type SkillsSecurityVerdictsResult, SkillsSecurityVerdictsResultSchema, type SkillsSkillCardParams, SkillsSkillCardParamsSchema, type SkillsSkillCardResult, SkillsSkillCardResultSchema, type SkillsStatusParams, SkillsStatusParamsSchema, type SkillsUpdateParams, SkillsUpdateParamsSchema, type SkillsUploadBeginParams, SkillsUploadBeginParamsSchema, type SkillsUploadChunkParams, SkillsUploadChunkParamsSchema, type SkillsUploadCommitParams, SkillsUploadCommitParamsSchema, type Snapshot, SnapshotSchema, type StateVersion, StateVersionSchema, type SystemAgentApprovalPresentation, type SystemAgentApprovalPresentationSchema, type SystemAgentChatHistoryParams, SystemAgentChatHistoryParamsSchema, type SystemAgentChatHistoryResult, SystemAgentChatHistoryResultSchema, type SystemAgentChatHistoryTurn, SystemAgentChatHistoryTurnSchema, type SystemAgentChatParams, SystemAgentChatParamsSchema, type SystemAgentChatQuestion, SystemAgentChatQuestionSchema, type SystemAgentChatResult, SystemAgentChatResultSchema, SystemAgentErrorDetailCodes, SystemAgentInferenceUnavailableErrorDetails, SystemAgentSessionInvalidatedErrorDetails, type SystemAgentSetupActivateParams, SystemAgentSetupActivateParamsSchema, type SystemAgentSetupActivateResult, SystemAgentSetupActivateResultSchema, type SystemAgentSetupAuthStartParams, SystemAgentSetupAuthStartParamsSchema, type SystemAgentSetupAuthStartResult, SystemAgentSetupAuthStartResultSchema, type SystemAgentSetupDetectParams, SystemAgentSetupDetectParamsSchema, type SystemAgentSetupDetectResult, SystemAgentSetupDetectResultSchema, type SystemAgentSetupVerifyParams, SystemAgentSetupVerifyParamsSchema, type SystemAgentSetupVerifyResult, SystemAgentSetupVerifyResultSchema, type SystemChangeEntry, SystemChangeEntrySchema, type SystemChangeKind, SystemChangeKindSchema, type SystemChangeSource, SystemChangeSourceSchema, type SystemChangesListParams, SystemChangesListParamsSchema, type SystemChangesListResult, SystemChangesListResultSchema, type SystemInfoParams, SystemInfoParamsSchema, type SystemInfoResult, SystemInfoResultSchema, type TalkAgentControlResult, TalkAgentControlResultSchema, type TalkCatalogParams, TalkCatalogParamsSchema, type TalkCatalogResult, TalkCatalogResultSchema, type TalkClientCloseParams, TalkClientCloseParamsSchema, type TalkClientCreateParams, TalkClientCreateParamsSchema, type TalkClientCreateResult, TalkClientCreateResultSchema, type TalkClientMutationResult, TalkClientMutationResultSchema, type TalkClientSteerParams, TalkClientSteerParamsSchema, type TalkClientToolCallParams, TalkClientToolCallParamsSchema, type TalkClientToolCallResult, TalkClientToolCallResultSchema, type TalkClientTranscriptParams, TalkClientTranscriptParamsSchema, type TalkConfigParams, TalkConfigParamsSchema, type TalkConfigResult, TalkConfigResultSchema, type TalkEvent, TalkEventSchema, type TalkModeParams, type TalkModeParamsSchema, type TalkSessionAcknowledgeMarkParams, TalkSessionAcknowledgeMarkParamsSchema, type TalkSessionAppendAudioParams, TalkSessionAppendAudioParamsSchema, type TalkSessionCancelOutputParams, TalkSessionCancelOutputParamsSchema, type TalkSessionCancelTurnParams, TalkSessionCancelTurnParamsSchema, type TalkSessionCloseParams, TalkSessionCloseParamsSchema, type TalkSessionCreateParams, TalkSessionCreateParamsSchema, type TalkSessionCreateResult, TalkSessionCreateResultSchema, type TalkSessionJoinParams, TalkSessionJoinParamsSchema, type TalkSessionJoinResult, TalkSessionJoinResultSchema, type TalkSessionOkResult, TalkSessionOkResultSchema, type TalkSessionSteerParams, TalkSessionSteerParamsSchema, type TalkSessionSubmitToolResultParams, TalkSessionSubmitToolResultParamsSchema, type TalkSessionTurnParams, TalkSessionTurnParamsSchema, type TalkSessionTurnResult, TalkSessionTurnResultSchema, type TalkSpeakParams, TalkSpeakParamsSchema, type TalkSpeakResult, TalkSpeakResultSchema, type TaskSuggestion, type TaskSuggestionEvent, TaskSuggestionEventSchema, type TaskSuggestionResolution, TaskSuggestionResolutionSchema, TaskSuggestionSchema, type TaskSuggestionsAcceptParams, TaskSuggestionsAcceptParamsSchema, type TaskSuggestionsAcceptResult, TaskSuggestionsAcceptResultSchema, type TaskSuggestionsCreateParams, TaskSuggestionsCreateParamsSchema, type TaskSuggestionsCreateResult, TaskSuggestionsCreateResultSchema, type TaskSuggestionsDismissParams, TaskSuggestionsDismissParamsSchema, type TaskSuggestionsDismissResult, TaskSuggestionsDismissResultSchema, type TaskSuggestionsListParams, TaskSuggestionsListParamsSchema, type TaskSuggestionsListResult, TaskSuggestionsListResultSchema, type TaskSummary, TaskSummarySchema, type TasksCancelParams, TasksCancelParamsSchema, type TasksCancelResult, TasksCancelResultSchema, type TasksGetParams, TasksGetParamsSchema, type TasksGetResult, TasksGetResultSchema, type TasksListParams, TasksListParamsSchema, type TasksListResult, TasksListResultSchema, type TerminalAckResult, TerminalAckResultSchema, type TerminalApprovalSnapshot, TerminalApprovalSnapshotSchema, type TerminalAttachParams, TerminalAttachParamsSchema, type TerminalAttachResult, TerminalAttachResultSchema, type TerminalCloseParams, TerminalCloseParamsSchema, type TerminalDataEvent, TerminalDataEventSchema, type TerminalEvent, TerminalEventSchema, type TerminalExitEvent, TerminalExitEventSchema, type TerminalInputParams, TerminalInputParamsSchema, type TerminalListResult, TerminalListResultSchema, type TerminalOpenParams, TerminalOpenParamsSchema, type TerminalOpenResult, TerminalOpenResultSchema, type TerminalResizeParams, TerminalResizeParamsSchema, type TerminalSessionApprovalEventSchema, type TerminalSessionInfo, TerminalSessionInfoSchema, type TerminalTextParams, TerminalTextParamsSchema, type TerminalTextResult, TerminalTextResultSchema, type TerminalUploadParams, TerminalUploadParamsSchema, type TerminalUploadResult, TerminalUploadResultSchema, type TickEvent, TickEventSchema, type ToolCatalogEntry, type ToolCatalogEntrySchema, type ToolCatalogGroup, type ToolCatalogGroupSchema, type ToolCatalogProfile, type ToolCatalogProfileSchema, type ToolsCatalogParams, ToolsCatalogParamsSchema, type ToolsCatalogResult, type ToolsCatalogResultSchema, type ToolsEffectiveEntry, type ToolsEffectiveEntrySchema, type ToolsEffectiveGroup, type ToolsEffectiveGroupSchema, type ToolsEffectiveNotice, type ToolsEffectiveNoticeSchema, type ToolsEffectiveParams, ToolsEffectiveParamsSchema, type ToolsEffectiveResult, type ToolsEffectiveResultSchema, type ToolsInvokeErrorSchema, type ToolsInvokeParams, ToolsInvokeParamsSchema, type ToolsInvokeResult, type ToolsInvokeResultSchema, type TtsSpeakParams, TtsSpeakParamsSchema, type TtsSpeakResult, TtsSpeakResultSchema, UiClosePaneCommandSchema, UiCommand, UiCommandParams, UiCommandParamsSchema, UiCommandResult, UiCommandResultSchema, UiCommandSchema, UiFocusCommandSchema, UiNavigateCommandSchema, UiPanelCommandSchema, UiSidebarCommandSchema, UiSplitCommandSchema, type UnknownAgentIdErrorDetails, type UnknownAgentIdErrorDetailsSchema, type UpdateRunParams, UpdateRunParamsSchema, type UpdateStatusParams, UpdateStatusParamsSchema, type UserProfile, type UserProfileAvatarMimeSchema, UserProfileSchema, type UsersLinkEmailParams, UsersLinkEmailParamsSchema, type UsersLinkEmailResult, UsersLinkEmailResultSchema, type UsersListParams, UsersListParamsSchema, type UsersListResult, UsersListResultSchema, type UsersSelfParams, UsersSelfParamsSchema, type UsersSelfResult, UsersSelfResultSchema, type UsersSetAvatarParams, UsersSetAvatarParamsSchema, type UsersSetAvatarResult, UsersSetAvatarResultSchema, type UsersSetDisplayNameParams, UsersSetDisplayNameParamsSchema, type UsersSetDisplayNameResult, UsersSetDisplayNameResultSchema, type ValidationError, WORKER_HEARTBEAT_INTERVAL_MS, WORKER_INFERENCE_MAX_CONTEXT_MESSAGES, WORKER_INFERENCE_MAX_OUTPUT_TOKENS, WORKER_INFERENCE_METHODS, WORKER_INFERENCE_PROTOCOL_FEATURE, WORKER_LAUNCH_V2_PROTOCOL_FEATURE, WORKER_LIVE_EVENT_PROTOCOL_FEATURE, WORKER_PROTOCOL_FEATURES, WORKER_PROTOCOL_MAX_FEATURES, WORKER_PROTOCOL_MAX_FEATURE_LENGTH, WORKER_PROTOCOL_MAX_FRAME_ID_LENGTH, WORKER_PROTOCOL_MAX_IDENTIFIER_LENGTH, WORKER_PROTOCOL_MAX_INFERENCE_PAYLOAD_BYTES, WORKER_PROTOCOL_MAX_METHOD_LENGTH, WORKER_PROTOCOL_MAX_PAYLOAD_BYTES, WORKER_PROTOCOL_METHODS, WORKER_RPC_SET_VERSION, WORKER_TRANSCRIPT_COMMIT_PROTOCOL_FEATURE, WORKER_TRANSCRIPT_MAX_BATCH_MESSAGES, WORKER_TRANSCRIPT_MAX_CONTENT_PARTS, WORKER_TRANSCRIPT_MAX_JSON_DEPTH, type WakeParams, WakeParamsSchema, type WebLoginStartParams, WebLoginStartParamsSchema, type WebLoginWaitParams, WebLoginWaitParamsSchema, type WebPushSubscribeParams, WebPushSubscribeParamsSchema, type WebPushTestParams, WebPushTestParamsSchema, type WebPushUnsubscribeParams, WebPushUnsubscribeParamsSchema, type WebPushVapidPublicKeyParams, WebPushVapidPublicKeyParamsSchema, type WizardCancelParams, WizardCancelParamsSchema, type WizardNextParams, WizardNextParamsSchema, type WizardNextResult, WizardNextResultSchema, type WizardNotFoundErrorDetails, WizardNotFoundErrorDetailsSchema, type WizardStartParams, WizardStartParamsSchema, type WizardStartResult, WizardStartResultSchema, type WizardStatusParams, WizardStatusParamsSchema, type WizardStatusResult, WizardStatusResultSchema, type WizardStep, WizardStepSchema, type WorkerAdmissionFailureReason, WorkerAdmissionFailureReasonSchema, type WorkerAdmissionHandshake, WorkerAdmissionHandshakeSchema, type WorkerAdmissionResponseFrame, WorkerAdmissionResponseFrameSchema, type WorkerConnectParams, type WorkerConnectRequestFrame, WorkerConnectRequestFrameSchema, type WorkerEnvironmentMetadata, WorkerEnvironmentMetadataSchema, type WorkerEnvironmentState, WorkerEnvironmentStateSchema, type WorkerErrorShape, type WorkerHeartbeatParams, WorkerHeartbeatParamsSchema, type WorkerHeartbeatRequestFrame, WorkerHeartbeatRequestFrameSchema, type WorkerHeartbeatResponseFrame, WorkerHeartbeatResponseFrameSchema, type WorkerHeartbeatResult, type WorkerHelloOk, WorkerInferenceCancelParams, WorkerInferenceCancelRequestFrame, WorkerInferenceCancelRequestFrameSchema, WorkerInferenceCancelResponseFrame, WorkerInferenceCancelResponseFrameSchema, WorkerInferenceCancelResult, WorkerInferenceContext, WorkerInferenceErrorReason, WorkerInferenceErrorShape, WorkerInferenceEventFrame, WorkerInferenceEventParams, WorkerInferenceModelRef, WorkerInferenceModelRefSchema, WorkerInferenceOptions, WorkerInferenceOptionsSchema, WorkerInferenceStartParams, WorkerInferenceStartRequestFrame, WorkerInferenceStartRequestFrameSchema, WorkerInferenceStartResponseFrame, WorkerInferenceStartResponseFrameSchema, WorkerInferenceStartResult, WorkerInferenceTerminalFrame, WorkerInferenceTerminalOutcome, WorkerInferenceTerminalParams, type WorkerLiveEvent, type WorkerLiveEventErrorDetails, WorkerLiveEventErrorDetailsSchema, type WorkerLiveEventErrorShape, WorkerLiveEventErrorShapeSchema, type WorkerLiveEventParams, WorkerLiveEventParamsSchema, type WorkerLiveEventRequestFrame, WorkerLiveEventRequestFrameSchema, type WorkerLiveEventResponseFrame, WorkerLiveEventResponseFrameSchema, type WorkerLiveEventResult, WorkerLiveEventResultSchema, WorkerLiveEventSchema, type WorkerProtocolCloseReason, WorkerProtocolCloseReasonSchema, type WorkerTranscriptCommitErrorReason, WorkerTranscriptCommitErrorReasonSchema, type WorkerTranscriptCommitErrorShape, WorkerTranscriptCommitErrorShapeSchema, type WorkerTranscriptCommitParams, WorkerTranscriptCommitParamsSchema, type WorkerTranscriptCommitRequestFrame, WorkerTranscriptCommitRequestFrameSchema, type WorkerTranscriptCommitResponseFrame, WorkerTranscriptCommitResponseFrameSchema, type WorkerTranscriptCommitResult, WorkerTranscriptCommitResultSchema, type WorkerTranscriptMessage, WorkerTranscriptMessageSchema, type WorkerTunnelStatus, WorkerTunnelStatusSchema, type WorktreeBranch, WorktreeBranchSchema, type WorktreeRecord, WorktreeRecordSchema, type WorktreeRepositoryStatus, WorktreeRepositoryStatusSchema, type WorktreesBranchesParams, WorktreesBranchesParamsSchema, type WorktreesBranchesResult, WorktreesBranchesResultSchema, type WorktreesCreateParams, WorktreesCreateParamsSchema, type WorktreesGcParams, WorktreesGcParamsSchema, type WorktreesGcResult, WorktreesGcResultSchema, type WorktreesListParams, WorktreesListParamsSchema, type WorktreesListResult, WorktreesListResultSchema, type WorktreesRemoveParams, WorktreesRemoveParamsSchema, type WorktreesRemoveResult, WorktreesRemoveResultSchema, type WorktreesRestoreParams, WorktreesRestoreParamsSchema, buildClawHubTrustErrorDetails, buildMissingScopeErrorDetails, buildSystemAgentInferenceUnavailableErrorDetails, buildSystemAgentSessionInvalidatedErrorDetails, errorShape, formatValidationErrors, isClawHubTrustErrorCode, isCloudWorkerPlacementState, isMcpAppViewExpiredError, isWellFormedApprovalId, missingScopeErrorShape, normalizeSessionIconInput, parseSessionIcon, readClawHubTrustErrorDetails, readMissingScopeError, readMissingScopeErrorDetails, readSystemAgentInferenceUnavailableErrorDetails, readSystemAgentSessionInvalidatedErrorDetails, validateAgentIdentityParams, validateAgentParams, validateAgentWaitParams, validateAgentsCreateParams, validateAgentsDeleteParams, validateAgentsFilesGetParams, validateAgentsFilesListParams, validateAgentsFilesSetParams, validateAgentsListParams, validateAgentsUpdateParams, validateAgentsWorkspaceGetParams, validateAgentsWorkspaceListParams, validateApprovalGetParams, validateApprovalGetResult, validateApprovalHistoryParams, validateApprovalHistoryResult, validateApprovalPresentation, validateApprovalResolveParams, validateApprovalResolveResult, validateArtifactsDownloadParams, validateArtifactsGetParams, validateArtifactsListParams, validateAuditActivityListParams, validateAuditListParams, validateBoardActionParams, validateBoardDataReadParams, validateBoardEventParams, validateBoardGetParams, validateBoardPromptAuthorizeParams, validateBoardUpdateParams, validateBoardWidgetAppViewParams, validateBoardWidgetContent, validateBoardWidgetGrantParams, validateBoardWidgetPutParams, validateChannelsLogoutParams, validateChannelsPairingApproveParams, validateChannelsPairingDismissParams, validateChannelsPairingListParams, validateChannelsStartParams, validateChannelsStatusParams, validateChannelsStopParams, validateChatAbortParams, validateChatHistoryParams, validateChatInjectParams, validateChatMessageGetParams, validateChatMetadataParams, validateChatSendParams, validateChatToolTitlesParams, validateCommandsListParams, validateConfigApplyParams, validateConfigGetParams, validateConfigPatchParams, validateConfigSchemaLookupParams, validateConfigSchemaLookupResult, validateConfigSchemaParams, validateConfigSetParams, validateConnectParams, validateConversationListParams, validateConversationSendParams, validateConversationTurnCancelParams, validateConversationTurnParams, validateCronAddParams, validateCronGetParams, validateCronListParams, validateCronRemoveParams, validateCronRunParams, validateCronRunsParams, validateCronScratchGetParams, validateCronScratchSetParams, validateCronStatusParams, validateCronUpdateParams, validateDevicePairApproveParams, validateDevicePairListParams, validateDevicePairRejectParams, validateDevicePairRemoveParams, validateDevicePairRenameParams, validateDevicePairSetupCodeParams, validateDeviceTokenRevokeParams, validateDeviceTokenRotateParams, validateEnvironmentsCreateParams, validateEnvironmentsDestroyParams, validateEnvironmentsListParams, validateEnvironmentsStatusParams, validateExecApprovalGetParams, validateExecApprovalRequestParams, validateExecApprovalResolveParams, validateExecApprovalsGetParams, validateExecApprovalsNodeGetParams, validateExecApprovalsNodeSetParams, validateExecApprovalsNodeSnapshot, validateExecApprovalsSetParams, validateFsListDirParams, validateFsListDirResult, validateGatewaySuspendPrepareParams, validateGatewaySuspendResumeParams, validateGatewaySuspendStatusParams, validateLogsTailParams, validateMessageActionParams, validateMigrationsMemoryApplyParams, validateMigrationsMemoryPlanParams, validateModelsAuthLogoutParams, validateModelsAuthStatusParams, validateModelsListParams, validateModelsProbeParams, validateNodeDescribeParams, validateNodeEventParams, validateNodeInvokeParams, validateNodeInvokeProgressParams, validateNodeInvokeResultParams, validateNodeListParams, validateNodePairApproveParams, validateNodePairListParams, validateNodePairRejectParams, validateNodePairRemoveParams, validateNodePendingAckParams, validateNodePendingDrainParams, validateNodePendingEnqueueParams, validateNodePluginToolsUpdateParams, validateNodePresenceActivityPayload, validateNodeRenameParams, validateNodeSkillsUpdateParams, validatePluginApprovalRequestParams, validatePluginApprovalResolveParams, validatePluginsInstallParams, validatePluginsListParams, validatePluginsRefreshParams, validatePluginsSearchParams, validatePluginsSessionActionParams, validatePluginsSessionActionResult, validatePluginsSetEnabledParams, validatePluginsUiDescriptorsParams, validatePluginsUiDescriptorsResult, validatePluginsUninstallParams, validatePollParams, validatePushTestParams, validateQuestionGetParams, validateQuestionListParams, validateQuestionRequestParams, validateQuestionResolveParams, validateQuestionWaitAnswerParams, validateRequestFrame, validateSecretsResolveParams, validateSecretsResolveResult, validateSendParams, validateSessionDiscussionInfoParams, validateSessionDiscussionInfoResult, validateSessionDiscussionOpenParams, validateSessionDiscussionOpenResult, validateSessionMemberAddParams, validateSessionMemberRemoveParams, validateSessionMembersListParams, validateSessionSuggestionsAddParams, validateSessionSuggestionsListParams, validateSessionSuggestionsResolveParams, validateSessionTypingParams, validateSessionVisibilitySetParams, validateSessionsAbortParams, validateSessionsBranchesListParams, validateSessionsBranchesSwitchParams, validateSessionsCatalogArchiveParams, validateSessionsCatalogContinueParams, validateSessionsCatalogListParams, validateSessionsCatalogReadParams, validateSessionsCleanupParams, validateSessionsCompactParams, validateSessionsCompactionBranchParams, validateSessionsCompactionGetParams, validateSessionsCompactionListParams, validateSessionsCompactionRestoreParams, validateSessionsCompanionAskParams, validateSessionsCompanionResetParams, validateSessionsCompanionStateParams, validateSessionsCreateParams, validateSessionsDeleteParams, validateSessionsDescribeParams, validateSessionsDiffParams, validateSessionsDispatchParams, validateSessionsFilesGetParams, validateSessionsFilesListParams, validateSessionsFilesRevealParams, validateSessionsFilesSetParams, validateSessionsForkParams, validateSessionsGroupsDeleteParams, validateSessionsGroupsListParams, validateSessionsGroupsListResult, validateSessionsGroupsMutationResult, validateSessionsGroupsPutParams, validateSessionsGroupsRenameParams, validateSessionsListParams, validateSessionsMessagesSubscribeParams, validateSessionsMessagesUnsubscribeParams, validateSessionsObserverVisibilityParams, validateSessionsPatchParams, validateSessionsPluginPatchParams, validateSessionsPreviewParams, validateSessionsReclaimParams, validateSessionsResetParams, validateSessionsResolveParams, validateSessionsRewindParams, validateSessionsSearchParams, validateSessionsSendParams, validateSessionsUsageParams, validateSessionsViewerPresenceSetParams, validateSkillsBinsParams, validateSkillsCuratorActionParams, validateSkillsCuratorStatusParams, validateSkillsDetailParams, validateSkillsInstallParams, validateSkillsProposalActionParams, validateSkillsProposalCreateParams, validateSkillsProposalEvaluateParams, validateSkillsProposalEventsListParams, validateSkillsProposalHistoryScanParams, validateSkillsProposalHistoryStatusParams, validateSkillsProposalInspectParams, validateSkillsProposalRequestRevisionParams, validateSkillsProposalReviseParams, validateSkillsProposalUpdateParams, validateSkillsProposalsListParams, validateSkillsSearchParams, validateSkillsSecurityVerdictsParams, validateSkillsSkillCardParams, validateSkillsStatusParams, validateSkillsUpdateParams, validateSkillsUploadBeginParams, validateSkillsUploadChunkParams, validateSkillsUploadCommitParams, validateSystemAgentChatHistoryParams, validateSystemAgentChatParams, validateSystemAgentSetupActivateParams, validateSystemAgentSetupAuthStartParams, validateSystemAgentSetupDetectParams, validateSystemAgentSetupVerifyParams, validateSystemChangesListParams, type validateSystemEventParams, validateSystemInfoParams, validateSystemInfoResult, validateTalkCatalogParams, validateTalkClientCloseParams, validateTalkClientCreateParams, validateTalkClientCreateResult, validateTalkClientMutationResult, validateTalkClientSteerParams, validateTalkClientToolCallParams, validateTalkClientToolCallResult, validateTalkClientTranscriptParams, validateTalkConfigParams, validateTalkConfigResult, validateTalkModeParams, validateTalkSessionAcknowledgeMarkParams, validateTalkSessionAppendAudioParams, validateTalkSessionCancelOutputParams, validateTalkSessionCancelTurnParams, validateTalkSessionCloseParams, validateTalkSessionCreateParams, validateTalkSessionJoinParams, validateTalkSessionSteerParams, validateTalkSessionSubmitToolResultParams, validateTalkSessionTurnParams, validateTalkSpeakParams, validateTaskSuggestionsAcceptParams, validateTaskSuggestionsCreateParams, validateTaskSuggestionsDismissParams, validateTaskSuggestionsListParams, validateTasksCancelParams, validateTasksGetParams, validateTasksListParams, validateTerminalAttachParams, validateTerminalCloseParams, validateTerminalInputParams, validateTerminalOpenParams, validateTerminalResizeParams, validateTerminalTextParams, validateTerminalUploadParams, validateTerminalUploadResult, validateToolsCatalogParams, validateToolsEffectiveParams, validateToolsInvokeParams, validateTtsSpeakParams, validateUiCommandParams, validateUpdateRunParams, validateUpdateStatusParams, validateUsersLinkEmailParams, validateUsersLinkEmailResult, validateUsersListParams, validateUsersSelfParams, validateUsersSelfResult, validateUsersSetAvatarParams, validateUsersSetAvatarResult, validateUsersSetDisplayNameParams, validateUsersSetDisplayNameResult, validateWakeParams, validateWebLoginStartParams, validateWebLoginWaitParams, validateWebPushSubscribeParams, validateWebPushTestParams, validateWebPushUnsubscribeParams, validateWebPushVapidPublicKeyParams, validateWizardCancelParams, validateWizardNextParams, validateWizardStartParams, validateWizardStatusParams, validateWorkerAdmissionHandshake, validateWorkerConnectRequestFrame, validateWorkerHeartbeatParams, validateWorkerInferenceCancelParams, validateWorkerInferenceEventFrame, validateWorkerInferenceStartParams, validateWorkerInferenceTerminalFrame, validateWorkerInferenceTerminalOutcome, validateWorkerLiveEventParams, validateWorkerTranscriptCommitParams, validateWorktreesBranchesParams, validateWorktreesCreateParams, validateWorktreesGcParams, validateWorktreesListParams, validateWorktreesRemoveParams, validateWorktreesRestoreParams };